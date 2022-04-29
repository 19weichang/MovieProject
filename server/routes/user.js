// const OneOf = require('../utils/oneOf');

const UserInfo = {
  account: '090001',
  password: 'a12345'
}

function Verify ({ text_Id_value, text_Password_value }) {
  const { account, password } = UserInfo

  return text_Id_value === account && text_Password_value === password
};

const Responses = [
  {
    sysCode: 0,
    responseMessage: 'Success'
  },
  {
    sysCode: 3,
    responseMessage: 'Player not found'
  },
  {
    sysCode: 9,
    responseMessage: 'System Maintain'
  },
  {
    sysCode: 15,
    responseMessage: 'This account has been frozen'
  },
  {
    sysCode: 500,
    responseMessage: 'Server internal error'
  }
]

module.exports = {
  install (app) {
  }
}
