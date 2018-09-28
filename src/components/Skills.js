import React, { Component } from 'react';
import skills from '../assets/json/skills.json';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Skills extends Component {
    constructor() {
        super()
        this.state = {
            skills: skills
        }
    }

    _numberToStars(number) {
        if (number === 5) {
            return (
                <span className="star">
                    <FontAwesomeIcon icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon icon="star" color="#6DB65B" size="sm"/>
                </span>
            )
        } else if (number === 4) {
            return (
                <span className="star">
                    <FontAwesomeIcon className="each-star" icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon className="each-star" icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon className="each-star" icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon className="each-star" icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon className="each-star" icon="star" color="#rrr" size="sm"/>
                </span>
            )
        } else {
            return (
                <span className="star">
                    <FontAwesomeIcon className="each-star" icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon className="each-star" icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon className="each-star" icon="star" color="#6DB65B" size="sm"/>
                    <FontAwesomeIcon className="each-star" icon="star" color="#rrr" size="sm"/>
                    <FontAwesomeIcon className="each-star" icon="star" color="#rrr" size="sm"/>
                </span>
            )
        }
    }

    render() {
        return (
            <div id="skills-component">
                <h2>Skills</h2>
                <div id="skillset" className="row">
                    <div className="col-md-6">
                        <ul>
                            {this.state.skills.slice(0, 6).map((skill, i) => {
                                return (
                                    <li key={i}>
                                        <span className="skill-name">{skill.name}</span>
                                        {this._numberToStars(skill.value)}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            {this.state.skills.slice(6).map((skill, i) => {
                                return (
                                    <li key={i}>
                                        <span className="skill-name">{skill.name}</span>
                                        {this._numberToStars(skill.value)}
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}
