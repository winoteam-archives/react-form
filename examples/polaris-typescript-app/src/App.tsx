import * as React from 'react'
import {
  AppProvider,
  Page,
  Layout,
  SettingToggle,
  TextStyle,
  Card,
} from '@shopify/polaris'
import { FormConsumer } from '@wino/react-form-core'
import {
  Form,
  TextField,
  NumberField,
  SelectField,
  SubmitButton,
} from '@wino/react-form-polaris'
import { isRequired, isInteger } from './validation'

type Props = {}

type Data = {
  id: number
  title: string
}

type State = {
  debug: boolean
  data?: Data
}

export default class App extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      debug: false,
      data: undefined,
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        data: {
          id: 1,
          title: 'My title post',
        },
      })
    }, 1000)
  }

  handleToggleDebugMode = () => {
    this.setState(prevState => ({
      debug: !prevState.debug,
    }))
  }

  handleSubmit = () => {
    alert('Submit !')
  }

  render() {
    const { debug, data } = this.state
    return (
      <AppProvider>
        <Page title="Form Polaris (Typescript)" separator={true}>
          <Layout>
            <Layout.AnnotatedSection
              title="Simple form"
              description="Create your forms in a few lines of code with a minimal API  ..."
            >
              <Card sectioned={true}>
                <Form onSubmit={this.handleSubmit}>
                  <TextField name="email" type="email" label="Email" />
                  <SelectField
                    name="date-range"
                    label="Date"
                    initialValue="yesterday"
                    options={[
                      { label: 'Today', value: 'today' },
                      { label: 'Yesterday', value: 'yesterday' },
                      { label: 'Last 7 days', value: 'lastWeek' },
                    ]}
                  />
                  <NumberField name="amount" label="Amount" prefix="$" />
                </Form>
              </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection
              title="Powerfull state management"
              description="Built on top of Formik, easily manage the state of your form"
            >
              <SettingToggle
                action={{
                  content: debug ? 'Disable' : 'Enable',
                  onAction: this.handleToggleDebugMode,
                }}
                enabled={debug}
              >
                This debug mode is
                <TextStyle variation="strong">
                  {` ${debug ? 'enabled' : 'disabled'}`}
                </TextStyle>
                .
              </SettingToggle>
              <Card sectioned={true}>
                <Form onSubmit={this.handleSubmit}>
                  <TextField name="name" type="text" label="Name" />
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
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection
              title="Form with initial values"
              description="Create your forms and populate it with initial data in static or from a remote endpoint (GraphQL, Rest ...) ..."
            >
              <Card sectioned={true}>
                <Form
                  id={data !== undefined ? String(data.id) : 'New'}
                  initialValues={data || {}}
                  onSubmit={this.handleSubmit}
                >
                  <TextField name="title" type="text" label="Title" />
                  <TextField
                    name="description"
                    type="text"
                    label="Description"
                    initialValue="-"
                  />
                </Form>
              </Card>
            </Layout.AnnotatedSection>
            <Layout.AnnotatedSection
              title="Validation"
              description="Manage validation rules with i18n support"
            >
              <Card sectioned={true}>
                <Form onSubmit={this.handleSubmit}>
                  <TextField
                    name="required"
                    type="text"
                    label="A required field"
                    validation={{ isRequired }}
                  />
                  <TextField
                    name="integer"
                    label="A numeric field"
                    validation={{ isInteger }}
                  />
                  <TextField
                    name="requiredandinteger"
                    label="A required and numeric field"
                    validation={{ isRequired, isInteger }}
                  />
                  <SubmitButton>Submit</SubmitButton>
                  <FormConsumer>
                    {form => (
                      <TextStyle variation="subdued">
                        {JSON.stringify(form)}
                      </TextStyle>
                    )}
                  </FormConsumer>
                </Form>
              </Card>
            </Layout.AnnotatedSection>
          </Layout>
        </Page>
      </AppProvider>
    )
  }
}
