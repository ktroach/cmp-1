from flask import jsonify, request, url_for, g, abort
from app import db
from app.models import ApplicantForm
from app.api import bp
from app.api.auth import token_auth
from app.api.errors import bad_request

@bp.route('/applicants', methods=['GET'])
@token_auth.login_required
def get_applicants():
    page = request.args.get('page', 1, type=int)
    per_page = min(request.args.get('per_page', 10, type=int), 100)
    data = ApplicantForm.to_collection_dict(ApplicantForm.query, page, per_page, 'api.get_applicants')
    return jsonify(data)  


@bp.route('/applicants/<int:id>', methods=['GET'])
@token_auth.login_required
def get_applicant(id):
    return jsonify(ApplicantForm.query.get_or_404(id).to_dict())


@bp.route('/applicants', methods=['POST'])
def create_applicant():
    data = request.get_json() or {}
    if 'first_name' not in data or 'last_name' not in data or 'email' not in data:
        return bad_request('must include first_name, last_name and email fields')
    if ApplicantForm.query.filter_by(email=data['email']).first():
        return bad_request('please use a different email address')
    applicantForm = ApplicantForm()
    applicantForm.from_dict(data)
    db.session.add(applicantForm)
    db.session.commit()
    response = jsonify(applicantForm.to_dict())
    response.status_code = 201
    response.headers['Location'] = url_for('api.get_applicant', id=applicantForm.id)
    return response


@bp.route('/applicants/<int:id>', methods=['PUT'])
@token_auth.login_required
def update_applicant(id):
    # TODO: only allow Admin users to update applicants
    applicantForm = ApplicantForm.query.get_or_404(id)
    data = request.get_json() or {}
    if 'email' in data and data['email'] != applicantForm.email and \
            ApplicantForm.query.filter_by(email=data['email']).first():
        return bad_request('please use a different email address')
    applicantForm.from_dict(data)
    db.session.commit()
    return jsonify(applicantForm.to_dict())    