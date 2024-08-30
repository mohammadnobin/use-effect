import React from 'react'
import Container from '../components/Container'
import PageHeaderReuseable from '../components/reuseable/PageHeaderReuseable'
import FromReuseable from '../components/reuseable/FromReuseable'

const ContactsPage = () => {
  return (
    <>
    <Container>
      <PageHeaderReuseable title='Contacts' prev='Home' next='Contacts' />
      <div className="lg:w-1/2">
        <FromReuseable formTitle='Fill up a Form' formItem='Message ' formplaceholder="Your message here" />
      </div>
      <div className="my-[140px]">
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29268.296461188616!2d90.21508850000001!3d23.513178599999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1724911195014!5m2!1sen!2sbd" width="100%" height="572" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </Container>
    </>
  )
}

export default ContactsPage