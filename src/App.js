import { Component } from "react";
import "semantic-ui-css/semantic.min.css";
import {
  Segment,
  Divider,
  Grid,
  Header,
  Icon,
  Search,
  Button,
} from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <div>
        <Segment placeholder>
          <Grid columns={2} stackable textAlign="center">
            <Divider vertical>Or</Divider>

            <Grid.Row verticalAlign="middle">
              <Grid.Column>
                <Header icon>
                  <Icon name="search" />
                  Cari document
                </Header>

                <Search placeholder="Search document..." />
              </Grid.Column>

              <Grid.Column>
                <Header icon>
                  <Icon name="pdf file outline" />
                  Tambah Document Baru
                </Header>
                <Button primary>Create Document</Button>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Segment>
      </div>
    );
  }
}

export default App;
