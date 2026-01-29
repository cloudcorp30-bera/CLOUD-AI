const config = require('../config.cjs');

const Callupdate = async (json, sock) => {
   for (const id of json) {
      if (id.status === 'offer' && config.REJECT_CALL ) {
         let msg = await sock.sendMessage(id.from, {
            text: `*_📞 Auto Reject Call Mode Activated_* \n*_📵 No Calls Allowed_*`,
            mentions: [id.from],
         });
         await sock.rejectCall(id.id, id.from);
      }
   }
};

module.exports = Callupdate;
