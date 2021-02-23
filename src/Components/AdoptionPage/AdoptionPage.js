import React from 'react';
import './AdoptionPage.css';
import ApiService from '../ApiService';
import baseUrl from '../config';

class AdoptionPage extends React.Component {
  state = {
    cats: [],
    dogs: [],
    people: [],
    name: '',
  };

  componentDidMount() {
    this.setFirstCat();
    this.setFirstDog();
    this.setAllPeople();
  }

  setFirstCat = () => {
    ApiService.getCat()
      .then((res) => {
        this.setState({
          cats: res,
        });
      })
      .catch({ error: 'An error occurred.' });
  };

  setFirstDog = () => {
    ApiService.getDog()
      .then((res) => {
        this.setState({
          dogs: res,
        });
      })
      .catch({ error: 'An error occurred.' });
  };

  setAllPeople = () => {
    ApiService.getPeople()
      .then((res) => {
        this.setState({
          people: res,
        });
      })
      .catch({ error: 'An error occurred.' });
  };

  adoptCat = () => {
    ApiService.adoptCat().then(() => {
      this.setState({
        cats: this.state.cats.splice(1),
        people: this.state.people.splice(1),
      });
    });
  };

  adoptDog = () => {
    ApiService.adoptDog().then(() => {
      this.setState({
        dogs: this.state.dogs.splice(1),
        people: this.state.people.splice(1),
      });
    });
  };

  firstInLine = () => {
    if (this.state.people[0] === this.name) {
      clearInterval(this.adoptInterval); //tell js to stop running interval
    }
  };

  // This function calls addPerson function (post request) and adds name to list of people array
  handleAddPerson = (e) => {
    e.preventDefault();
    ApiService.addPerson(this.state.name).then(() => {
      this.name = this.state.name;
      this.setState({
        people: [...this.state.people, this.state.name],
        name: '',
      });
      this.adoptInterval = setInterval(() => {
        if (new Date().getTime() % 2 === 0) {
          this.adoptCat();
        } else {
          this.adoptDog();
        }
        ApiService.addPerson('Elvira').then(() => {
          this.setState({
            people: [...this.state.people, 'Elvira'],
          });
        });
      }, 5000);
    });
  };

  // Handles on change event when adding name
  handleOnChange = (e) => {
    e.preventDefault();
    this.setState({
      name: e.target.value,
    });
  };

  // calls renderPet to set up pet's information, and renders both cats and dogs along with adopt button
  renderCatsAndDogs() {
    return (
      <div>
        <div>
          {this.renderPet(this.state.dogs[0], 'Dog')}

          <button
            className='adopt-button'
            onClick={this.handleAdoptDogButton}
            type='button'
            disabled={this.state.people[0] !== this.name}
          >
            ADOPT DOG!
          </button>
        </div>
        <br />
        <br />
        <div>
          {this.renderPet(this.state.cats[0], 'Cat')}
          <button
            className='adopt-button'
            onClick={this.handleAdoptCatButton}
            type='button'
            disabled={this.state.people[0] !== this.name}
          >
            ADOPT CAT!
          </button>
        </div>
        <br />
        <br />
      </div>
    );
  }

  // Renders the cat or dogs information along with picture
  renderPet(petObj, petType) {
    if (petObj === undefined) {
      return <></>;
    }
    let petName = petObj.name;
    let petPic = petObj.imageURL;
    let petDescription = petObj.description;
    let petGender = petObj.gender;
    let petAge = petObj.age;
    let petBreed = petObj.breed;
    let petStory = petObj.story;

    return (
      <div className='adoption-image'>
        <img className='bg-img' src={petPic} alt={petType}></img>
        <h3>{petName}</h3>
        <p>Description: {petDescription}</p>
        <p>Name: {petName}</p>
        <p>Age: {petAge}</p>
        <p>Gender: {petGender}</p>
        <p>Breed: {petBreed}</p>
        <p>Story: {petStory}</p>
      </div>
    );
  }

  // Handles message and button when user clicks to adopt a dog
  handleAdoptDogButton = (e) => {
    e.preventDefault();
    this.adoptDog();
    alert('Meet your new loyal and loving dog!');
  };

  // Handles message and button when user clicks to adopt a cat
  handleAdoptCatButton = (e) => {
    e.preventDefault();
    this.adoptCat();
    alert('Meet your new furry and playful cat!');
  };

  render() {
    this.firstInLine();
    return (
      <div>
        <div>{this.renderCatsAndDogs()}</div>

        <fieldset className='name-list-style'>
          <h3>Add Name to List: </h3>
          <form onSubmit={this.handleAddPerson}>
            <label htmlFor='fullName'>Name: </label>
            <input
              name='fullName'
              value={this.state.name}
              onChange={this.handleOnChange}
              placeholder='Enter your name'
              required
            ></input>
            <button type='submit'>Add Name</button>
          </form>
          <ul>
            {this.state.people.map((person, i) => {
              return <li key={i}>{person}</li>;
            })}
          </ul>
        </fieldset>
      </div>
    );
  }
}

export default AdoptionPage;
