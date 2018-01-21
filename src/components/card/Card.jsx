import React from 'react'; 
import { Panel } from 'react-bootstrap';

export default class CardView extends React.Component {
  constructor(props) {
    super(props)
    
    this.state = {
      name: '',
      mountain: '',
      picture: '',
      latitude: '',
      longitude: '',
      attitude: '',
      structure: '',
      length: '',
      numOfTrcks: '',
      generalInfo: '',
      url: '',
      rating: '',
      exposure: '',
      displacement: '',
      difficultyDownhill: '',
      difficultyClimbing: '',
      region: ''
    }
  }
  render() {
    let data = this.props.data ? this.props.data : {
      notFound: false,
      picture: 'http://placehold.it/60x60',
      name: 'Example name',
      mountain: 'Example mountain',
      region: 'Example region',
      latitude: '200x300',
      longitude: '123x342',
      attitude: '12342',
      structure: 'slkdso',
      length: '123',
      numOfTrcks: '11'
    };
    
    if (data.notFound === 'Not Found') {
      return <h3 className="card__notfound">Not found. Try again!</h3>
    } else {
      return (
        <Panel id="collapsible-panel-example-2">
					<Panel.Heading>
						<Panel.Title toggle>
              <div className="card">
                <img className="card__picture" src={data.picture} />             
                <h2 className="card__name"> {data.name}</h2>
                <dl>
                  <dt>Планина:</dt>
                  <dd>{data.mountain}</dd>

                  <dt>Регион:</dt>
                  <dd>{data.region}</dd>
                </dl>
              </div>
						</Panel.Title>
					</Panel.Heading>
					<Panel.Body collapsible>
          <div>
                <dl>
                  <dt> latitude:</dt>
                  <dd>{data. latitude}</dd>

                  <dt>longitude:</dt>
                  <dd>{data.longitude}</dd>

                  <dt> attitude:</dt>
                  <dd>{data.attitude}</dd>

                  <dt> structure:</dt>
                  <dd>{data.structure}</dd>

                  <dt> length:</dt>
                  <dd>{data.length}</dd>

                  <dt> numOfTrcks:</dt>
                  <dd>{data.numOfTrcks}</dd>
                </dl>
               </div> 
					</Panel.Body>
				</Panel>
       
      )
    }
  }
}
