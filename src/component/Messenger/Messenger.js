import React from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat/lib/MessengerCustomerChat';

const Messenger = () => {
    return (
        <div>
             <MessengerCustomerChat
                pageId="<PAGE_ID>"
                appId="<APP_ID>"
                htmlRef="<REF_STRING>"
            />
        </div>
    );
};

export default Messenger;