import React from 'react'
import { PageLayoutFooter } from 'app/components/page-layout-footer'
import { NewsletterSignup } from 'app/components/newsletter-signup'

export const Footer: React.FC = () => {
  return (
    <PageLayoutFooter margin={0} width={'100%'}>
      <NewsletterSignup />
    </PageLayoutFooter>
  )
}
