import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { TabContent, TabPane, Nav, NavItem, NavLink, Button, CustomInput, Form, FormGroup, Input, Label, Row, Col, Card, CardTitle, CardText, CardBody, FormText } from 'reactstrap';
import Divider from '../common/Divider';
import withRedirect from '../../hoc/withRedirect';
import classnames from 'classnames';
import axios from "axios";          
import Datetime from 'react-datetime';

const ApplicantForm = ({ setRedirect, setRedirectUrl, layout, hasLabel }) => {
    // State
    const [check1, setCheck1] = useState(false);
    const [check2, setCheck2] = useState(false);
    const [check3, setCheck3] = useState(false);
    const [check4, setCheck4] = useState(false);
    const [check5, setCheck5] = useState(false);
    const [check6, setCheck6] = useState(false);
    const [check7, setCheck7] = useState(false);
    const [check8, setCheck8] = useState(false);

    const [degreeProgramSelect, setDegreeProgramSelect] = useState('');

    const [firstName, setFirstName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [lastName, setLastName] = useState('');
    const [maidenName, setMaidenName] = useState('');
    const [primaryEmail, setPrimaryEmail] = useState('');
    const [homePhone, setHomePhone] = useState('');
    const [cellPhone, setCellPhone] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [city, setCity] = useState('');    
    const [stateProv, setStateProv] = useState('');    
    const [zip, setZip] = useState('');    
    const [genderSelect, setGenderSelect] = useState('');    
    const [dateOfBirth, setDateOfBirth] = useState('');    
    const [citizenShipSelect, setCitizenShipSelect] = useState('');    
    const [citizenShipCountry, setCitizenShipCountry] = useState('');    
    const [maritalStatus, setMaritalStatus] = useState('');    
    const [dateOfMarriage, setDateOfMarriage] = useState('');    


    const [highSchoolAttended, setHighSchoolAttended] = useState('');
    const [dateOfCompletion, setDateOfCompletion] = useState('');    

    const [firstSchoolName, setFirstSchoolName] = useState('');
    const [firstSchoolStart, setFirstSchoolStart] = useState('');
    const [firstSchoolEnd, setFirstSchoolEnd] = useState('');
    const [firstSchoolDiploma, setFirstSchoolDiploma] = useState('');

    const [secondSchoolName, setSecondSchoolName] = useState('');
    const [secondSchoolStart, setSecondSchoolStart] = useState('');
    const [secondSchoolEnd, setSecondSchoolEnd] = useState('');
    const [secondSchoolDiploma, setSecondSchoolDiploma] = useState('');
    
    const [thirdSchoolName, setThirdSchoolName] = useState('');
    const [thirdSchoolStart, setThirdSchoolStart] = useState('');
    const [thirdSchoolEnd, setThirdSchoolEnd] = useState('');
    const [thirdSchoolDiploma, setThirdSchoolDiploma] = useState('');    

    const [highestLevelOfEducation, setHighestLevelOfEducation] = useState('');


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isAccepted, setIsAccepted] = useState(false);
    const [isNext1Disabled, setIsNext1Disabled] = useState(true);
    const [isNext2Disabled, setIsNext2Disabled] = useState(true);
    const [isNext3Disabled, setIsNext3Disabled] = useState(true);
    const [isNext4Disabled, setIsNext4Disabled] = useState(true);
    const [isNext5Disabled, setIsNext5Disabled] = useState(true);
    const [isNext6Disabled, setIsNext6Disabled] = useState(true);
    const [isNext7Disabled, setIsNext7Disabled] = useState(true);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);

    const [currentEmployer, setCurrentEmployer] = useState('');
    const [currentPosition, setCurrentPosition] = useState('');
    const [currentEmployerStart, setCurrentEmployerStart] = useState('');

    const [previousEmployer, setPreviousEmployer] = useState('');
    const [previousPosition, setPreviousPosition] = useState('');
    const [previousEmployerStart, setPrevioustEmployerStart] = useState('');

    const [currentChurch, setCurrentChurch] = useState('');
    const [currentPastor, setCurrentPastor] = useState('');
    const [currentDenomination, setCurrentDenomination] = useState('');
    const [currentChurchAddress, setCurrentChurchAddress] = useState('');
    const [currentChurchCity, setCurrentChurchCity] = useState('');
    const [currentChurchState, setCurrentChurchState] = useState('');
    const [currentChurchZip, setCurrentChurchZip] = useState('');
    const [currentChurchAttendance, setCurrentChurchAttendance] = useState('');
    const [currentChurchAttendRegularly, setCurrentChurchAttendRegularly] = useState('');
    const [currentChurchMember, setCurrentChurchMember] = useState('');
    const [currentChurchTither, setCurrentChurchTither] = useState('');

    const [previousChurch, setPreviousChurch] = useState('');
    const [previousPastor, setPreviousPastor] = useState('');
    const [previousChurchStart, setPreviousChurchStart] = useState('');
    const [previousChurchEnd, setPreviousChurchEnd] = useState('');

    const [referencesPastorName, setReferencesPastorName] = useState('');
    const [referencesPastorPhone, setReferencesPastorPhone] = useState('');
    const [referencesPastorEmail, setReferencesPastorEmail] = useState('');
    const [referencesPastorAddress, setReferencesPastorAddress] = useState('');
    const [referencesPastorCity, setReferencesPastorCity] = useState('');
    const [referencesPastorState, setReferencesPastorState] = useState('');
    const [referencesPastorZip, setReferencesPastorZip] = useState('');
    const [referencesPastorKnown, setReferencesPastorKnown] = useState('');

    const [referencesPersonalName, setReferencesPersonalName] = useState('');
    const [referencesPersonalPhone, setReferencesPersonalPhone] = useState('');
    const [referencesPersonalEmail, setReferencesPersonalEmail] = useState('');
    const [referencesPersonalAddress, setReferencesPersonalAddress] = useState('');
    const [referencesPersonalCity, setReferencesPersonalCity] = useState('');
    const [referencesPersonalState, setReferencesPersonalState] = useState('');
    const [referencesPersonalZip, setReferencesPersonalZip] = useState('');
    const [referencesPersonalKnown, setReferencesPersonalKnown] = useState('');    

    const [reasonsForApplying, setReasonsForApplying] = useState('');    

    const [briefTestimony, setBriefTestimony] = useState('');
    const [spiritualGrowth, setSpiritualGrowth] = useState('');    

    const handleSubmit = e => {
        e.preventDefault();
        const updates = {
          "school_id": "1", 
          "first_name": firstName,
          "middle_name": middleName,
          "last_name": lastName,
          "maiden_name": maidenName,
          "email": primaryEmail, 
          "address_1": address1, 
          "address_2": address2, 
          "city": city, 
          "stateprovince": stateProv, 
          "zipcode": zip, 
          "home_phone": homePhone, 
          "cell_phone": cellPhone, 
          "gender": genderSelect, 
          "date_of_birth": dateOfBirth, 
          "citizenship_status": citizenShipSelect,
          "citizenship_country": citizenShipCountry,
          "high_school_attended": highSchoolAttended, 
          "date_of_completion": dateOfCompletion
        };
        submitRequest(updates);
    };

    const submitRequest = async updates => {
        axios.post('https://cmp-master.herokuapp.com/api/applicants', updates)
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    };

    useEffect(() => {
        setRedirectUrl(`/authentication/${layout}/login`);
    }, [setRedirectUrl, layout]);

    useEffect(() => {
        setIsNext1Disabled(!degreeProgramSelect);
    }, [degreeProgramSelect]);

    useEffect(() => {
        setIsNext2Disabled(!firstName);
    }, [firstName]);    

    useEffect(() => {
        setIsNext3Disabled(!highSchoolAttended);
    }, [highSchoolAttended]);    

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
        if (tab === "1") {
            setActiveTab(tab);
        }
        if (tab === "2") {
            if (degreeProgramSelect) {
                setActiveTab(tab);
                if (!check1) {
                  renderCheck("tab1");
                }
            }
        }
        if (tab === "3") {
            if (firstName) {
                setActiveTab(tab);
                if (!check2) {
                  renderCheck("tab2");
                }                
            }
        }     
        if (tab === "4") {
            if (highSchoolAttended) {
                setActiveTab(tab);
                if (!check3) {
                  renderCheck("tab3");
                }                
            }
        }             
        if (tab === "5") {
          setActiveTab(tab);
          if (!check4) {
            renderCheck("tab4");
          }                
        }
        if (tab === "6") {
          setActiveTab(tab);
          if (!check5) {
            renderCheck("tab5");
          }                
        }
        if (tab === "7") {
          setActiveTab(tab);
          if (!check6) {
            renderCheck("tab6");
          }                
        }
        if (tab === "8") {
          setActiveTab(tab);
          if (!check7) {
            renderCheck("tab7");
          }                
        }
        //if (activeTab !== tab) setActiveTab(tab);
  };

  const renderCheck = id => {
    if (id === "tab1") {
      setCheck1(true);
    }
    if (id === "tab2") {
      setCheck2(true);
    }    
    if (id === "tab3") {
      setCheck3(true);
    }    
    if (id === "tab4") {
      setCheck4(true);
    }    
    if (id === "tab5") {
      setCheck5(true);
    }    
    if (id === "tab6") {
      setCheck6(true);
    }    
    if (id === "tab7") {
      setCheck7(true);
    }    
    if (id === "tab8") {
      setCheck8(true);
    }    
    const el = document.getElementById(id);
    if (el) {
      el.style.color="green";
      var newDiv = document.createElement("div"); 
      newDiv.innerHTML = "<span>&#10003;</span>";
      el.appendChild(newDiv); 
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Nav tabs>
        <NavItem>
          <NavLink
            id="tab1"
            className={classnames({ active: activeTab === '1' })}
            onClick={() => { toggle('1'); renderCheck() }}
          >
            Degree 
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            id="tab2"
            className={classnames({ active: activeTab === '2' })}
            onClick={() => { toggle('2'); }}
          >
            Personal 
          </NavLink>
        </NavItem>

        <NavItem>
          <NavLink
            id="tab3"
            className={classnames({ active: activeTab === '3' })}
            onClick={() => { toggle('3'); }}
          >
            Education 
          </NavLink>
        </NavItem>     

        <NavItem>
          <NavLink
            id="tab4"
            className={classnames({ active: activeTab === '4' })}
            onClick={() => { toggle('4'); }}
          >
            Work 
          </NavLink>
        </NavItem> 

        <NavItem>
          <NavLink
            id="tab5"
            className={classnames({ active: activeTab === '5' })}
            onClick={() => { toggle('5'); }}
          >
            Church 
          </NavLink>
        </NavItem>     

        <NavItem>
          <NavLink
            id="tab6"
            className={classnames({ active: activeTab === '6' })}
            onClick={() => { toggle('6'); }}
          >
            References
          </NavLink>
        </NavItem> 

        <NavItem>
          <NavLink
            id="tab7"
            className={classnames({ active: activeTab === '7' })}
            onClick={() => { toggle('7'); }}
          >
            Testimony
          </NavLink>
        </NavItem> 

        <NavItem>
          <NavLink
            id="tab8"
            className={classnames({ active: activeTab === '8' })}
            onClick={() => { toggle('8'); }}
          >
            Affirmations
          </NavLink>
        </NavItem>                                              

      </Nav>

      <TabContent activeTab={activeTab}>

        <TabPane tabId="1">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                  <Card className="mb-3">
                    <CardBody className="fs--1">
                      <CardTitle></CardTitle>
                      <Row>
                        <Col>   
                          <FormGroup>
                              <Label for="degreeProgramSelect">Which Degree Program are you applying for?</Label>
                              <Input type="select" name="degreeProgramSelect" id="degreeProgramSelect" value={degreeProgramSelect} onChange={({ target }) => setDegreeProgramSelect(target.value)}>
                                  <option></option>
                                  <option>Certificate in Christian Counseling</option>
                                  <option>Certificate in Biblical Studies</option>
                                  <option>Associates Degree (A.A. Theology)</option>
                                  <option>Bachelors Degree (B.A. Theology)</option>
                                  <option>Masters Degree (M.A. Theology)</option>
                                  <option>Doctorate Degree (PhD. Theology)</option>
                              </Input>
                              <FormText>Select the Degree Program that you are interested in applying to</FormText>
                          </FormGroup>
                          <hr />
                          <FormGroup check>
                              <Label check>
                              <Input type="checkbox" /> Are you a current or past Student of this College applying for the next degree level?
                              </Label>
                              <FormText>Only check this box if you have previously enrolled in courses or attended this college</FormText>
                          </FormGroup>                    
                    </Col>
                      </Row>
                    </CardBody>
                  </Card> 
                </Col>
            </Row>
        </TabPane>

        <TabPane tabId="2" disabled={true}>
            <Row>
                <Col sm="12" style={{padding: 20}}>

                <Card className="mb-3">
                    <CardBody className="fs--1">
                      <CardTitle></CardTitle>
                      <Row>
                        <Col>                  
                <FormGroup>
                    <Label for="firstName">First Name</Label>
                    <Input type="text" name="firstName" id="firstName" placeholder="" value={firstName} onChange={({ target }) => setFirstName(target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="middleName">Middle Name</Label>
                    <Input type="text" name="middleName" id="middleName" placeholder="" value={middleName} onChange={({ target }) => setMiddleName(target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="lastName">Last Name</Label>
                    <Input type="text" name="lastName" id="lastName" placeholder="" value={lastName} onChange={({ target }) => setLastName(target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="maidenName">Maiden Name</Label>
                    <Input type="text" name="maidenName" id="maidenName" placeholder="" value={maidenName} onChange={({ target }) => setMaidenName(target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="primaryEmail">Email</Label>
                    <Input type="email" name="primaryEmail" id="primaryEmail" placeholder="username@email.com" value={primaryEmail} onChange={({ target }) => setPrimaryEmail(target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="homePhone">Home Phone #</Label>
                    <Input type="text" name="homePhone" id="homePhone" placeholder="" value={homePhone} onChange={({ target }) => setHomePhone(target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="cellPhone">Cell Phone #</Label>
                    <Input type="text" name="cellPhone" id="cellPhone" placeholder="" value={cellPhone} onChange={({ target }) => setCellPhone(target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="address1">Address</Label>
                    <Input type="text" name="address1" id="address1" placeholder="1234 Main St" value={address1} onChange={({ target }) => setAddress1(target.value)} />
                </FormGroup>
                <FormGroup>
                    <Label for="address2">Address 2</Label>
                    <Input type="text" name="address2" id="address2" placeholder="Apartment, studio, or floor" value={address2} onChange={({ target }) => setAddress2(target.value)} />
                </FormGroup>
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input type="text" name="city" id="city" value={city} onChange={({ target }) => setCity(target.value)} />
                    </FormGroup>
                    </Col>
                    <Col md={4}>
                    <FormGroup>
                        <Label for="stateProv">State</Label>
                        <Input type="text" name="stateProv" id="stateProv" value={stateProv} onChange={({ target }) => setStateProv(target.value)} />
                    </FormGroup>
                    </Col>
                    <Col md={2}>
                    <FormGroup>
                        <Label for="zip">Zip</Label>
                        <Input type="text" name="zip" id="zip" value={zip} onChange={({ target }) => setZip(target.value)} />
                    </FormGroup>
                    </Col>
                </Row>
                <FormGroup>
                    <Label for="genderSelect">Gender</Label>
                    <Input type="select" name="genderSelect" id="genderSelect">
                    <option></option>
                    <option>Male</option>
                    <option>Female</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="dateOfBirth">Date of Birth</Label>
                    <Input
                    type="date"
                    name="dateOfBirth"
                    id="dateOfBirth"
                    placeholder="01/01/1970"
                    />
                </FormGroup>
                <FormGroup>
                    <Label for="citizenShipSelect">Citizenship Status</Label>
                    <Input type="select" name="citizenShipSelect" id="citizenShipSelect">
                    <option></option>
                    <option>Non-resident Alien</option>
                    <option>Not U.S. Citizen</option>
                    <option>Resident Alien</option>
                    <option>U.S. Citizen</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="citizenShipCountry">Citizenship Country</Label>
                    <Input type="text" name="citizenShipCountry" id="citizenShipCountry" placeholder="" />
                </FormGroup>


                </Col>
                      </Row>
                    </CardBody>
                  </Card>  

                </Col>
            </Row>
        </TabPane>

        <TabPane tabId="3">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                  <Card className="mb-3">
                    <CardBody className="fs--1">
                      <CardTitle>High School/GED</CardTitle>
                      <Row>
                        <Col>
                          <FormGroup>
                            <Label for="highSchoolAttended">High School Attended</Label>
                            <Input type="text" name="highSchoolAttended" id="highSchoolAttended" placeholder="" value={highSchoolAttended} onChange={({ target }) => setHighSchoolAttended(target.value)} />
                          </FormGroup>


                          <FormGroup>
                            <Label for="highestLevelOfEducation">Highest Level of Education Completed</Label>
                            <Input type="select" name="highestLevelOfEducation" id="highestLevelOfEducation" value={highestLevelOfEducation} onChange={({ target }) => setHighestLevelOfEducation(target.value)}>
                              <option></option>
                              <option>High School or GED</option>
                              <option>Associates Degree</option>
                              <option>Bachelors Degree</option>
                              <option>Masters Degree</option>
                              <option>Doctorate or PhD</option>
                            </Input>
                          </FormGroup>


                          <FormGroup>
                            <Label for="dateOfCompletion">Date of Completion</Label>
                            <Datetime
                              id="dateOfCompletion"
                              value={dateOfCompletion}
                              onChange={setDateOfCompletion}
                              type="datetime"
                              timeFormat={false}
                              closeOnSelect
                            />
                          </FormGroup>
                        </Col>
                      </Row>
                    </CardBody>
                  </Card>  

                  <hr />
                  <FormGroup check>
                      <Label check>
                        <Input type="checkbox" /> I can read, write, and comprehend the English language
                      </Label>
                  </FormGroup>   

                  <p>Starting after high school, list the educational institutions you've attended:</p>

                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>First School</CardTitle>
                            <Row>
                              <Col>
                                  <FormGroup>
                                      <Label for="firstSchoolName">School Name</Label>
                                      <Input type="text" name="firstSchoolName" id="firstSchoolName" placeholder="" value={firstSchoolName} onChange={({ target }) => setFirstSchoolName(target.value)} />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="firstSchoolStart">School Start Date</Label>
                                      <Datetime 
                                        id="firstSchoolStart"
                                        value={firstSchoolStart}
                                        onChange={setFirstSchoolStart}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                      
                                  </FormGroup>  
                                  <FormGroup>
                                      <Label for="firstSchoolEnd">School End Date</Label>
                                      <Datetime 
                                        id="firstSchoolEnd"
                                        value={firstSchoolEnd}
                                        onChange={setFirstSchoolEnd}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                        
                                  </FormGroup>   
                                  <FormGroup>
                                      <Label for="firstSchoolDiploma">Degree/Diploma Acquired</Label>
                                      <Input type="text" name="firstSchoolDiploma" id="firstSchoolDiploma" placeholder="" value={firstSchoolDiploma} onChange={({ target }) => setFirstSchoolDiploma(target.value)} />
                                  </FormGroup>                                                                                                       
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>                    
 
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Second School</CardTitle>
                            <Row>
                              <Col>
                                  <FormGroup>
                                      <Label for="secondSchoolName">School Name</Label>
                                      <Input type="text" name="secondSchoolName" id="secondSchoolName" placeholder="" value={secondSchoolName} onChange={({ target }) => setSecondSchoolName(target.value)} />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="secondSchoolStart">School Start Date</Label>
                                      <Datetime 
                                        id="secondSchoolStart"
                                        value={secondSchoolStart}
                                        onChange={setSecondSchoolStart}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                         
                                  </FormGroup>  
                                  <FormGroup>
                                      <Label for="secondSchoolEnd">School End Date</Label>
                                      <Datetime 
                                        id="secondSchoolEnd"
                                        value={secondSchoolEnd}
                                        onChange={setSecondSchoolEnd}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                       
                                  </FormGroup>   
                                  <FormGroup>
                                      <Label for="secondSchoolDiploma">Degree/Diploma Acquired</Label>
                                      <Input type="text" name="secondSchoolDiploma" id="secondSchoolDiploma" placeholder="" value={secondSchoolDiploma} onChange={({ target }) => setSecondSchoolDiploma(target.value)} />
                                  </FormGroup>                                                                                                       
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>  
                   
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Third School</CardTitle>
                            <Row>
                              <Col>
                                  <FormGroup>
                                      <Label for="thirdSchoolName">School Name</Label>
                                      <Input type="text" name="thirdSchoolName" id="thirdSchoolName" placeholder="" value={thirdSchoolName} onChange={({ target }) => setThirdSchoolName(target.value)} />
                                  </FormGroup>
                                  <FormGroup>
                                      <Label for="thirdSchoolStart">School Start Date</Label>
                                      <Datetime 
                                        id="thirdSchoolStart"
                                        value={thirdSchoolStart}
                                        onChange={setThirdSchoolStart}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                          
                                  </FormGroup>  
                                  <FormGroup>
                                      <Label for="thirdSchoolEnd">School End Date</Label>
                                      <Datetime 
                                        id="thirdSchoolEnd"
                                        value={thirdSchoolEnd}
                                        onChange={setThirdSchoolEnd}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                           
                                  </FormGroup>   
                                  <FormGroup>
                                      <Label for="thirdSchoolDiploma">Degree/Diploma Acquired</Label>
                                      <Input type="text" name="thirdSchoolDiploma" id="thirdSchoolDiploma" placeholder="" value={thirdSchoolDiploma} onChange={({ target }) => setThirdSchoolDiploma(target.value)} />
                                  </FormGroup>                                                                                                       
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>  

                </Col>
            </Row>
        </TabPane>


        <TabPane tabId="4">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                    <p>Starting with your current employer, list your work experience</p>
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Current Employer</CardTitle>
                            <Row>
                              <Col>
                                <FormGroup>
                                    <Label for="currentEmployer">Employer Name</Label>
                                    <Input type="text" name="currentEmployer" id="currentEmployer" placeholder="" value={currentEmployer} onChange={({ target }) => setCurrentEmployer(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                    <Label for="currentPosition">Title/Position</Label>
                                    <Input type="text" name="currentPosition" id="currentPosition" placeholder="" value={currentPosition} onChange={({ target }) => setCurrentPosition(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                      <Label for="currentEmployerStart">Start Date</Label>
                                      <Datetime 
                                        id="currentEmployerStart"
                                        value={currentEmployerStart}
                                        onChange={setCurrentEmployerStart}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                          
                                  </FormGroup>  
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>  
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Previous Employer</CardTitle>
                            <Row>
                              <Col>
                                <FormGroup>
                                    <Label for="previousEmployer">Employer Name</Label>
                                    <Input type="text" name="previousEmployer" id="previousEmployer" placeholder="" value={previousEmployer} onChange={({ target }) => setPreviousEmployer(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                    <Label for="previousPosition">Title/Position</Label>
                                    <Input type="text" name="previousPosition" id="previousPosition" placeholder="" value={previousPosition} onChange={({ target }) => setPreviousPosition(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                      <Label for="previousEmployerStart">Start Date</Label>
                                      <Datetime 
                                        id="previousEmployerStart"
                                        value={previousEmployerStart}
                                        onChange={setPrevioustEmployerStart}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                          
                                  </FormGroup>  
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>                     
                </Col>
            </Row>
        </TabPane>


        <TabPane tabId="5">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Current Church</CardTitle>
                            <Row>
                              <Col>
                                <FormGroup>
                                    <Label for="currentChurch">Church Name</Label>
                                    <Input type="text" name="currentChurch" id="currentChurch" placeholder="" value={currentChurch} onChange={({ target }) => setCurrentChurch(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                    <Label for="currentPastor">Pastor's Name</Label>
                                    <Input type="text" name="currentPastor" id="currentPastor" placeholder="" value={currentPastor} onChange={({ target }) => setCurrentPastor(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                    <Label for="currentDenomination">Denomination / Organization</Label>
                                    <Input type="text" name="currentDenomination" id="currentDenomination" placeholder="" value={currentDenomination} onChange={({ target }) => setCurrentDenomination(target.value)} />
                                </FormGroup>    

                                <FormGroup>
                                    <Label for="currentChurchAddress">Address</Label>
                                    <Input type="text" name="currentChurchAddress" id="currentChurchAddress" placeholder="" value={currentChurchAddress} onChange={({ target }) => setCurrentChurchAddress(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="currentChurchCity">City</Label>
                                    <Input type="text" name="currentChurchCity" id="currentChurchCity" placeholder="" value={currentChurchCity} onChange={({ target }) => setCurrentChurchCity(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="currentChurchState">State</Label>
                                    <Input type="text" name="currentChurchState" id="currentChurchState" placeholder="" value={currentChurchState} onChange={({ target }) => setCurrentChurchState(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="currentChurchZip">Zip</Label>
                                    <Input type="text" name="currentChurchZip" id="currentChurchZip" placeholder="" value={currentChurchZip} onChange={({ target }) => setCurrentChurchZip(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="currentChurchAttendance">How long have you attended this church?</Label>
                                    <Input type="text" name="currentChurchAttendance" id="currentChurchAttendance" placeholder="" value={currentChurchAttendance} onChange={({ target }) => setCurrentChurchAttendance(target.value)} />
                                </FormGroup>    

                                <FormGroup>
                                  <Label for="currentChurchAttendRegularly">Do you attend church regularly?</Label>
                                  <Input type="select" name="currentChurchAttendRegularly" id="currentChurchAttendRegularly" value={currentChurchAttendRegularly} onChange={({ target }) => setCurrentChurchAttendRegularly(target.value)}>
                                    <option>-- select one --</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                  </Input>
                                </FormGroup>

                                <FormGroup>
                                  <Label for="currentChurchMember">Are you a member of your current church?</Label>
                                  <Input type="select" name="currentChurchMember" id="currentChurchMember" value={currentChurchMember} onChange={({ target }) => setCurrentChurchMember(target.value)}>
                                    <option>-- select one --</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                  </Input>
                                </FormGroup>

                                <FormGroup>
                                  <Label for="currentChurchTither">Are you a tither?</Label>
                                  <Input type="select" name="currentChurchTither" id="currentChurchTither" value={currentChurchTither} onChange={({ target }) => setCurrentChurchTither(target.value)}>
                                    <option>-- select one --</option>
                                    <option>Yes</option>
                                    <option>No</option>
                                  </Input>
                                </FormGroup>                                

                              </Col>
                            </Row>
                        </CardBody>
                    </Card>  
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Previous Church</CardTitle>
                            <Row>
                              <Col>
                                <FormGroup>
                                    <Label for="previousChurch">Church Name</Label>
                                    <Input type="text" name="previousChurch" id="previousChurch" placeholder="" value={previousChurch} onChange={({ target }) => setPreviousChurch(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                    <Label for="previousPastor">Pastor's Name</Label>
                                    <Input type="text" name="previousPastor" id="previousPastor" placeholder="" value={previousPastor} onChange={({ target }) => setPreviousPastor(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                      <Label for="previousChurchStart">Start Date</Label>
                                      <Datetime 
                                        id="previousChurchStart"
                                        value={previousChurchStart}
                                        onChange={setPreviousChurchStart}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                          
                                  </FormGroup>  
                                  <FormGroup>
                                      <Label for="previousChurchEnd">Start Date</Label>
                                      <Datetime 
                                        id="previousChurchEnd"
                                        value={previousChurchEnd}
                                        onChange={setPreviousChurchEnd}
                                        type="datetime"
                                        timeFormat={false}
                                        closeOnSelect                        
                                      />                                          
                                  </FormGroup>                                    
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>                     
                </Col>
            </Row>
        </TabPane>  

        <TabPane tabId="6">
          <Row>
              <Col sm="12" style={{padding: 20}}>
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Pastoral Reference</CardTitle>
                            <Row>
                              <Col>
                                <FormGroup>
                                    <Label for="referencesPastorName">Pastor's Name</Label>
                                    <Input type="text" name="referencesPastorName" id="referencesPastorName" placeholder="" value={referencesPastorName} onChange={({ target }) => setReferencesPastorName(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                    <Label for="referencesPastorPhone">Phone #</Label>
                                    <Input type="text" name="referencesPastorPhone" id="referencesPastorPhone" placeholder="" value={referencesPastorPhone} onChange={({ target }) => setReferencesPastorPhone(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                    <Label for="referencesPastorEmail">Email</Label>
                                    <Input type="text" name="referencesPastorEmail" id="referencesPastorEmail" placeholder="" value={referencesPastorEmail} onChange={({ target }) => setReferencesPastorEmail(target.value)} />
                                </FormGroup>    

                                <FormGroup>
                                    <Label for="referencesPastorAddress">Address</Label>
                                    <Input type="text" name="referencesPastorAddress" id="referencesPastorAddress" placeholder="" value={referencesPastorAddress} onChange={({ target }) => setReferencesPastorAddress(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="referencesPastorCity">City</Label>
                                    <Input type="text" name="referencesPastorCity" id="referencesPastorCity" placeholder="" value={referencesPastorCity} onChange={({ target }) => setReferencesPastorCity(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="referencesPastorState">State</Label>
                                    <Input type="text" name="referencesPastorState" id="referencesPastorState" placeholder="" value={referencesPastorState} onChange={({ target }) => setReferencesPastorState(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="referencesPastorZip">Zip</Label>
                                    <Input type="text" name="referencesPastorZip" id="referencesPastorZip" placeholder="" value={referencesPastorZip} onChange={({ target }) => setReferencesPastorZip(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="referencesPastorKnown">How long have you known this individual (Years/Months)?</Label>
                                    <Input type="text" name="referencesPastorKnown" id="referencesPastorKnown" placeholder="" value={referencesPastorKnown} onChange={({ target }) => setReferencesPastorKnown(target.value)} />
                                </FormGroup>    

                              </Col>
                            </Row>
                        </CardBody>
                    </Card>  
                    <Card className="mb-3">
                        <CardBody className="fs--1">
                          <CardTitle>Personal Reference</CardTitle>
                            <Row>
                              <Col>
                              <FormGroup>
                                    <Label for="referencesPersonalName">Pastor's Name</Label>
                                    <Input type="text" name="referencesPersonalName" id="referencesPersonalName" placeholder="" value={referencesPersonalName} onChange={({ target }) => setReferencesPersonalName(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                    <Label for="referencesPersonalPhone">Phone #</Label>
                                    <Input type="text" name="referencesPersonalPhone" id="referencesPersonalPhone" placeholder="" value={referencesPersonalPhone} onChange={({ target }) => setReferencesPersonalPhone(target.value)} />
                                </FormGroup>    
                                <FormGroup>
                                    <Label for="referencesPersonalEmail">Email</Label>
                                    <Input type="text" name="referencesPersonalEmailv" id="referencesPersonalEmail" placeholder="" value={referencesPersonalEmail} onChange={({ target }) => setReferencesPersonalEmail(target.value)} />
                                </FormGroup>    

                                <FormGroup>
                                    <Label for="referencesPersonalAddress">Address</Label>
                                    <Input type="text" name="referencesPersonalAddress" id="referencesPersonalAddress" placeholder="" value={referencesPersonalAddress} onChange={({ target }) => setReferencesPersonalAddress(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="referencesPersonalCity">City</Label>
                                    <Input type="text" name="referencesPersonalCity" id="referencesPersonalCity" placeholder="" value={referencesPersonalCity} onChange={({ target }) => setReferencesPersonalCity(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="referencesPersonalState">State</Label>
                                    <Input type="text" name="referencesPersonalState" id="referencesPersonalState" placeholder="" value={referencesPersonalState} onChange={({ target }) => setReferencesPersonalState(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="referencesPersonalZip">Zip</Label>
                                    <Input type="text" name="referencesPersonalZip" id="referencesPersonalZip" placeholder="" value={referencesPersonalZip} onChange={({ target }) => setReferencesPersonalZip(target.value)} />
                                </FormGroup>

                                <FormGroup>
                                    <Label for="referencesPersonalKnown">How long have you known this individual (Years/Months)?</Label>
                                    <Input type="text" name="referencesPersonalKnown" id="referencesPersonalKnown" placeholder="" value={referencesPersonalKnown} onChange={({ target }) => setReferencesPersonalKnown(target.value)} />
                                </FormGroup>                                       
                              </Col>
                            </Row>
                        </CardBody>
                    </Card>                     
                </Col>
            </Row>
        </TabPane>         

        <TabPane tabId="7">
           <Row>
              <Col sm="12" style={{padding: 20}}>
                  <Card className="mb-3">
                      <CardBody className="fs--1">
                        <CardTitle>Testimony</CardTitle>
                          <Row>
                            <Col>
                              <FormGroup>
                                  <Label for="briefTestimony">Write a brief testimony of your Christian experience, including details of your salvation, and any other significant events that have contributed to your Christian growth including water baptism?</Label>
                                  <Input type="textarea" name="briefTestimony" id="briefTestimony" placeholder="" value={briefTestimony} onChange={({ target }) => setBriefTestimony(target.value)} />
                              </FormGroup>    
                            </Col>
                          </Row>
                      </CardBody>
                  </Card> 
                  <Card className="mb-3">
                      <CardBody className="fs--1">
                        <CardTitle>Spiritual Growth</CardTitle>
                          <Row>
                            <Col>
                              <FormGroup>
                                  <Label for="spiritualGrowth">Have you received the baptism of the Holy Spirit with the evidence of speaking in tongues? If yes, please briefly describe what this has meant to your Christian growth?</Label>
                                  <Input type="textarea" name="spiritualGrowth" id="spiritualGrowth" placeholder="" value={spiritualGrowth} onChange={({ target }) => setSpiritualGrowth(target.value)} />
                              </FormGroup>    
                            </Col>
                          </Row>
                      </CardBody>
                  </Card>                    
                </Col>
            </Row>
        </TabPane>   

        <TabPane tabId="8">
            <Row>
                <Col sm="12" style={{padding: 20}}>
                    <Card className="mb-3">
                      <CardBody className="fs--1">
                        <CardTitle>Reason(s) for Applying. Answer the following question in your own words</CardTitle>
                          <Row>
                            <Col>
                              <FormGroup>
                                  <Label for="reasonsForApplying">Why do you want to attend Angelo Bible College?</Label>
                                  <Input type="textarea" name="reasonsForApplying" id="reasonsForApplying" placeholder="" value={reasonsForApplying} onChange={({ target }) => setReasonsForApplying(target.value)} />
                              </FormGroup>    
                            </Col>
                          </Row>
                      </CardBody>
                    </Card> 
                    <hr />
                    <p>By submitting this application, I certify that I have truthfully and accurately answered all questions contained in this application. I understand that falsification of any kind is grounds for refusal of my application or expulsion should falsehood be discovered after acceptance into the academic program.</p>
                    <Button color="primary" block className="mt-3" onClick={handleSubmit}>
                        Submit Application
                    </Button>                    
                </Col>
            </Row>
        </TabPane>                         
      </TabContent>
    </Form>
  );
};

ApplicantForm.propTypes = {
  setRedirect: PropTypes.func.isRequired,
  setRedirectUrl: PropTypes.func.isRequired,
  layout: PropTypes.string,
  hasLabel: PropTypes.bool
};

ApplicantForm.defaultProps = {
  layout: 'basic',
  hasLabel: false
};

export default withRedirect(ApplicantForm);
