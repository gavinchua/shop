export default {
  data() {
    return {
      navbarOptionsMember: {
        elementId: 'main-navbar',
        isUsingVueRouter: true,
        mobileBreakpoint: 767,
        ariaLabelMainNav: 'Main Navigation',
        tooltipAnimationType: 'shift-away',
        menuOptionsLeft: [
          {
            type: 'link',
            text: 'Corporate',
            subMenuOptions: [
              {
                type: 'link',
                text: 'About Us',
                path: './about-us'
              },
              {
                type: 'link',
                text: 'Locations',
                path: './locations'
              },
              {
                type: 'link',
                text: 'Contact Us',
                path: './contact-us'
              }
            ]
          },
          {
            type: 'link',
            text: 'Support',
            subMenuOptions: [
              {
                type: 'link',
                text: 'FAQs',
                path: './faqs'
              },
              {
                type: 'link',
                text: 'Help Desk',
                path: './help-desk'
              },
              {
                type: 'link',
                text: 'Customer Service',
                path: './customer-service'
              }
            ]
          },
          {
            type: 'link',
            text: 'Subscribe',
            path: './subscribe'
          }
        ],
        menuOptionsRight: [
          {
            type: 'link',
            text: 'Market',
            path: './market'
          },
          {
            type: 'link',
            text: 'Account',
            path: './account'
          },
          {
            isLinkAction: true,
            type: 'button',
            text: 'Log Out',
            path: ''
          }
        ]
      }
    }
  }
}
