import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
  Section,
  Row,
  Column,
} from 'npm:@react-email/components@0.0.22'
import * as React from 'npm:react@18.3.1'

interface WeeklyInvitationEmailProps {
  playerName: string
  weekDate: string
  responseToken: string
  baseUrl: string
}

export const WeeklyInvitationEmail = ({
  playerName,
  weekDate,
  responseToken,
  baseUrl,
}: WeeklyInvitationEmailProps) => (
  <Html>
    <Head />
    <Preview>Ready for Tiki Taka this Wednesday? Let us know if you're coming! ⚽</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>TIKI TAKA FOOTBALL ⚽</Heading>
        
        <Text style={greeting}>
          Hey {playerName}!
        </Text>
        
        <Text style={text}>
          Wednesday training is coming up and we want to know if you'll be joining us on the pitch!
        </Text>
        
        <Section style={sessionInfo}>
          <Text style={sessionTitle}>📅 Next Session Details</Text>
          <Text style={sessionDetail}>
            <strong>Date:</strong> {weekDate}
          </Text>
          <Text style={sessionDetail}>
            <strong>Time:</strong> 17:30 - 19:00
          </Text>
          <Text style={sessionDetail}>
            <strong>Location:</strong> Kunststofbanen, Arsenalvej 2, København
          </Text>
        </Section>

        <Text style={questionText}>
          Will you be there? Just click one of the buttons below:
        </Text>

        <Section style={buttonSection}>
          <Row>
            <Column style={buttonColumn}>
              <Link
                href={`${baseUrl}/respond/${responseToken}?response=yes`}
                style={yesButton}
              >
                I'm Coming! ⚽
              </Link>
            </Column>
            <Column style={buttonColumn}>
              <Link
                href={`${baseUrl}/respond/${responseToken}?response=maybe`}
                style={maybeButton}
              >
                Maybe 🤔
              </Link>
            </Column>
            <Column style={buttonColumn}>
              <Link
                href={`${baseUrl}/respond/${responseToken}?response=no`}
                style={noButton}
              >
                Can't Make It 😔
              </Link>
            </Column>
          </Row>
        </Section>

        <Text style={footerText}>
          You can change your response anytime by clicking the links above. 
          We'll send reminders closer to the session if we don't hear from you!
        </Text>

        <Text style={encouragement}>
          Looking forward to some great football this Wednesday! 🏃‍♂️
        </Text>

        <Text style={signature}>
          The Tiki Taka Team
        </Text>
      </Container>
    </Body>
  </Html>
)

export default WeeklyInvitationEmail

const main = {
  backgroundColor: '#f8fafc',
  fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif",
}

const container = {
  margin: '0 auto',
  padding: '40px 20px',
  maxWidth: '600px',
  backgroundColor: '#ffffff',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
}

const h1 = {
  color: '#000000',
  fontSize: '36px',
  fontWeight: '900',
  letterSpacing: '-0.025em',
  lineHeight: '1.2',
  margin: '0 0 32px',
  textAlign: 'center' as const,
}

const greeting = {
  color: '#000000',
  fontSize: '20px',
  fontWeight: '600',
  lineHeight: '1.4',
  margin: '0 0 16px',
}

const text = {
  color: '#374151',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '1.6',
  margin: '16px 0',
}

const sessionInfo = {
  backgroundColor: '#f3f4f6',
  borderRadius: '8px',
  padding: '24px',
  margin: '24px 0',
}

const sessionTitle = {
  color: '#000000',
  fontSize: '18px',
  fontWeight: '700',
  margin: '0 0 16px',
}

const sessionDetail = {
  color: '#374151',
  fontSize: '16px',
  fontWeight: '400',
  lineHeight: '1.5',
  margin: '8px 0',
}

const questionText = {
  color: '#000000',
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '1.4',
  margin: '32px 0 24px',
  textAlign: 'center' as const,
}

const buttonSection = {
  margin: '32px 0',
}

const buttonColumn = {
  width: '33.33%',
  padding: '0 4px',
}

const yesButton = {
  backgroundColor: '#16a34a', // green-600 to match status-yes
  borderRadius: '8px',
  color: '#ffffff',
  display: 'block',
  fontFamily: "'Inter', sans-serif",
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.2',
  padding: '12px 16px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box' as const,
}

const maybeButton = {
  backgroundColor: '#eab308', // yellow-500 to match status-maybe
  borderRadius: '8px',
  color: '#000000', // black text to match status-maybe
  display: 'block',
  fontFamily: "'Inter', sans-serif",
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.2',
  padding: '12px 16px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box' as const,
}

const noButton = {
  backgroundColor: '#dc2626', // red-600 to match status-no
  borderRadius: '8px',
  color: '#ffffff',
  display: 'block',
  fontFamily: "'Inter', sans-serif",
  fontSize: '14px',
  fontWeight: '600',
  lineHeight: '1.2',
  padding: '12px 16px',
  textAlign: 'center' as const,
  textDecoration: 'none',
  width: '100%',
  boxSizing: 'border-box' as const,
}

const footerText = {
  color: '#6b7280',
  fontSize: '14px',
  lineHeight: '1.6',
  margin: '32px 0 16px',
  textAlign: 'center' as const,
}

const encouragement = {
  color: '#374151',
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '1.6',
  margin: '24px 0',
  textAlign: 'center' as const,
}

const signature = {
  color: '#000000',
  fontSize: '14px',
  fontWeight: '600',
  margin: '24px 0 0',
  textAlign: 'center' as const,
}