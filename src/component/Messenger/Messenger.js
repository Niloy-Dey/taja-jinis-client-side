import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';

const Messenger = () => {
    return (
        <div className=''>
             <MessengerCustomerChat
                pageId="102682828378542"
                appId="744630273318213"
                // htmlRef="<REF_STRING>"
            />

            {/*   <!-- messenger app id 744630273318213  
                page id  102682828378542
  --> */}
        </div>
    );
};

export default Messenger;