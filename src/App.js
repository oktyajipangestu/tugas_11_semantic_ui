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
  Placeholder,
  List,
  Dimmer,
  Loader,
  Image,
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
        <Segment>
          <Dimmer active>
            <Loader>Loading</Loader>
          </Dimmer>

          <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
        </Segment>

        <Grid columns={3} stackable>
          <Grid.Column width={6}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={6}>
            <Segment raised>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder.Header>
                <Placeholder.Paragraph>
                  <Placeholder.Line length="medium" />
                  <Placeholder.Line length="short" />
                </Placeholder.Paragraph>
              </Placeholder>
            </Segment>
          </Grid.Column>

          <Grid.Column width={4}>
            <Segment raised>
              <h3>Website Terkait</h3>
              <List>
                <List.Item
                  icon="linkify"
                  content={<a href="http://www.google.com">Google</a>}
                />
                <List.Item
                  icon="linkify"
                  content={<a href="http://www.facebook.com">Facebook</a>}
                />
                <List.Item
                  icon="linkify"
                  content={
                    <a href="http://www.semantic-ui.com">semantic-ui.com</a>
                  }
                />
                <List.Item
                  icon="linkify"
                  content={<a href="http://www.niomic.com">Niomic</a>}
                />
                <List.Item
                  icon="linkify"
                  content={<a href="https://reactjs.org/">React</a>}
                />
              </List>
            </Segment>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
