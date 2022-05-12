module.exports = {
  install (app) {
    app.get('/team.do', (req, res) => {
      // let isServerError = Math.random() > (0 || 0.96);

      // let sysCode = (isServerError
      //   ? OneOf([9, 15, 500])
      //   : Verify(req.body) ? 0 : 3
      // );
      // // let sysCode = 0

      // let { responseMessage } = Responses.find(response => {
      //   return response.sysCode === sysCode;
      // });
      // Status.isLogin = sysCode === 0;
      // if (sysCode === 0) {
      responseData = [
        {
          teamName: 'elephant',
          win: 10,
          lose: 5,
          tie: 1
        },
        {
          teamName: 'lion',
          win: 7,
          lose: 8,
          tie: 1
        },
        {
          teamName: 'mokeys',
          win: 13,
          lose: 3,
          tie: 0
        },
        {
          teamName: 'dragon',
          win: 8,
          lose: 8,
          tie: 0
        },
        {
          teamName: 'warrior',
          win: 2,
          lose: 14,
          tie: 0
        }
      ]
      // }
      setTimeout(() => {
        res.json({
          // sysCode,
          detail: {
            // responseMessage,
            ...responseData
          }
        })
      }, Math.random() * 3 * 1000)
    })
  }
}
