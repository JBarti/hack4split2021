import {  Component } from 'react';
import { compose } from 'ramda';
import { Typography, Container, ButtonGroup} from '@material-ui/core';
import Button from '../button';
import ProgressBar from '../progressBar';
import Step1 from './steps/step1';
import Step2 from './steps/step2';
import Step3 from './steps/step3';
import Step4 from './steps/step4';
import Step5 from './steps/step5';
import Step6 from './steps/step6';
import Step7 from './steps/step7';

const MAX = 7;

class CampaignForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentStep: 1,
      name: "",
      description: "",
      images: [],
      items: [],
      address: "",
      startDate: "",
      endDate: "",
    }
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({[name]: value})
  }

  handleImageChange = e => {
    let url = URL.createObjectURL(e.target.files[0]);
    this.setState({images: [...this.state.images, url]})
  }

  _next = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep >= MAX-1 ? MAX : currentStep + 1;
    this.setState({
      currentStep: currentStep,
    })
  }

  _prev = () => {
    let currentStep = this.state.currentStep;
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep,
    })
  }

  get previousButton(){
    let currentStep = this.state.currentStep;

    if(currentStep !== 1){
      return(
        <Button
          onClick={this._prev}
          color="primary"
        >Nazad</Button>
      )
    }

    return null;
  }

  get nextButton(){
    let currentStep = this.state.currentStep;

    if(currentStep < 7){
      return(
        <Button
          onClick={this._next}
          color="primary"
        >Dalje</Button>
      )
    }

    return null;
  }

  get submitButton(){
    if(this.state.currentStep === MAX){
      return(
        <Button 
          onClick={compose(this.props.onClose, (e) => this.props.onSubmit(e, this.state))}
          color="primary"
        >
          Završi
        </Button>
      )
    }

    return null;
  }

  render(){
    return(
      <Container style={{paddingTop: "1rem", paddingBottom: "1rem", height: "100%"}}>
        <Typography variant="h6">{this.state.currentStep}. korak</Typography>
        <ProgressBar value={this.state.currentStep * (100/MAX)}/>
        <Step1 
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          userName="Veso"
          name={this.state.name}
        />
        <Step2 
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          description={this.state.description}
        />
        <Step3
          currentStep={this.state.currentStep}
          handleChange={this.handleImageChange}
          images={this.images}
        />
        <Step4
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          address={this.state.address}
        />
        <Step5
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          startDate={this.state.startDate}
          endDate={this.state.endDate}
        />
        <Step6
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          items={this.state.items}
        />
        <Step7
          currentStep={this.state.currentStep}
          handleChange={this.handleChange}
          campaign={this.state}
        />
        <ButtonGroup style={{marginTop:"1rem", float:"right"}}>
          {this.previousButton}
          {this.nextButton}
          {this.submitButton}
        </ButtonGroup>
      </Container>
    );
  }
}

export default CampaignForm;