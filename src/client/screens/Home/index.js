//MODULES
import React, { Component }  from 'react'
import AppBar from '../../components/AppBar'
import { Card, Icon, Image, Container } from 'semantic-ui-react'

//COMPONENT
export default class Home extends Component {
  render() {
    return (
      <div>
        < AppBar / >
        <Container style={{ width: '100%' }}>
          <Card.Group centered style={{paddingTop: 80}} >
          <Card href='https://github.com/zainfikrih/' style={{ textAlign: 'center' }}>
            <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>
                React Master
            </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Build in 2018
                </span>
              </Card.Meta>
              <Card.Description>
                React Boilerplat with Material UI & Semantic UI
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              < a href = 'https://github.com/zainfikrih/react-material-semantic' target='_blank' >
                <Icon name='code' />
                Github Repository
              </a>
            </Card.Content>
          </Card>

          <Card href='https://github.com/zainfikrih/' style={{ textAlign: 'center' }}>
            <Image src='https://react.semantic-ui.com/assets/images/avatar/large/matthew.png' />
            <Card.Content>
              <Card.Header>
                React Master
            </Card.Header>
              <Card.Meta>
                <span className='date'>
                  Build in 2018
                </span>
              </Card.Meta>
              <Card.Description>
                React Boilerplat with Material UI & Semantic UI
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
              < a href = 'https://github.com/zainfikrih/react-material-semantic' target='_blank' >
                <Icon name='code' />
                Github Repository
              </a>
            </Card.Content>
          </Card>
        </Card.Group>
          
        </Container>
      </div>
    )
  }
}