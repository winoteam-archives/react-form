import * as React from 'react'
import {
  AppProvider,
  Page,
  Layout,
  Button,
  TextStyle,
  Card,
} from '@shopify/polaris'
import { FormConsumer } from 'react-form-core'
import { Form, TextField, NumberField, SelectField } from 'react-form-polaris'

type Props = {}

type State = {
  debug: boolean
}

export default class App extends React.Component<Props, State> {
  state = { debug: false }

  handleToggleDebugMode = () => {
    this.setState(prevState => ({
      debug: !prevState.debug,
    }))
  }

  handleSubmit = () => {
    alert('Submit !')
  }

  render() {
    const { debug } = this.state
    return (
      <AppProvider>
        <Page title="Formik x Polaris" separator={true}>
          <Layout>
            <Layout.Section>
              <Button
                icon="notification"
                primary={debug}
                outline={!debug}
                onClick={this.handleToggleDebugMode}
              >
                Toggle debug mode
              </Button>
              <div style={{ marginTop: 24 }}>
                <Card sectioned={true}>
                  <Form initialValues={{}} onSubmit={this.handleSubmit}>
                    <TextField name="email" type="email" label="Email" />
                    <SelectField
                      name="date-range"
                      label="Date"
                      options={[
                        { label: 'Today', value: 'today' },
                        { label: 'Yesterday', value: 'yesterday' },
                        { label: 'Last 7 days', value: 'lastWeek' },
                      ]}
                    />
                    <NumberField name="amount" label="Amount" prefix="$" />
                    {debug && (
                      <FormConsumer>
                        {form => (
                          <TextStyle variation="subdued">
                            {JSON.stringify(form)}
                          </TextStyle>
                        )}
                      </FormConsumer>
                    )}
                  </Form>
                </Card>
              </div>
            </Layout.Section>
          </Layout>
        </Page>
      </AppProvider>
    )
  }
}
