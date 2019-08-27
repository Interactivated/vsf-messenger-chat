declare const FB

const messengerChatSnippet = function (d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s)
  js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js'
  fjs.parentNode.insertBefore(js, fjs)
}

// https://developers.facebook.com/docs/messenger-platform/discovery/customer-chat-plugin/sdk#install

export function beforeRegistration ({ Vue, config, store, isServer }) {
  if (!isServer && config.facebookJsSdk && config.facebookJsSdk.appId) {
    (<any>window).fbAsyncInit = function() {
      FB.init({
        appId            : config.facebookJsSdk.appId,
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v3.2'
      });
    };

    var head = document.getElementsByTagName('head')[0],
    script = document.createElement('script');

    script.src = 'https://connect.facebook.net/en_US/sdk.js';
    script.async = true
    script.defer = true
    head.appendChild(script);

    messengerChatSnippet (document, 'script', 'facebook-jssdk')
  }
}
