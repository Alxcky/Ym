/*
九章头条 leaf
IOS可以直接在appstore搜索下载，也可以用下面邀请链接
邀请链接：http://xq49or.sousou.com/pages/activity/download?invite_code=boxQAWz3
邀请码：boxQAWz3

变量 jzttToken，多账号用@隔开
格式 token@token@token

定时一小时一次即可:
15 0,6-23 * * *

可以自定义提现门槛，填到jzttWithdrawLimit里，默认为0.3，填30就不会提现大于30的金额
按门槛自动提现，从大到小，默认0.3元，默认跳过5块和2块提现，想要提2和5的手动去提
默认每次阅读3篇文章，可以自定义阅读次数填到jzttReadNum里

九章头条黑号秽土转生：
用接码平台 (http://h5.miyun.pro/zc.html?inviteCode=106160)
接码注册九章，然后绑定黑号的微信即可
注意：！！！接码有风险，容易被顶号，请自己考虑清楚

*/

const $ = new Env('九章头条');
const _0x24ba72=_0x4f78;(function(_0x3639be,_0x4a0c76){const _0x40005d=_0x4f78,_0x50ffd6=_0x3639be();while(!![]){try{const _0x11c785=-parseInt(_0x40005d(0x1e9))/(0x1bee+-0x1*-0xd6f+-0x295c)*(-parseInt(_0x40005d(0x190))/(0x82b+-0x11*-0x142+0x1*-0x1d8b))+parseInt(_0x40005d(0x30a))/(0x1921*-0x1+-0x7f*0x35+-0x63*-0x85)*(-parseInt(_0x40005d(0x289))/(0x1*-0xfb2+-0x34*-0x76+-0x842))+parseInt(_0x40005d(0x1e8))/(0x264a+-0x1fe5+0x2*-0x330)*(parseInt(_0x40005d(0x2f1))/(0x7f*-0xb+-0x2*0x83+-0x25*-0x2d))+-parseInt(_0x40005d(0x2d2))/(0x81*-0x30+-0x2552*-0x1+-0xd1b)*(parseInt(_0x40005d(0x3c1))/(0x8*-0x56+0x232b+-0x2073))+parseInt(_0x40005d(0x44c))/(0x1*-0x46f+-0x410*0x7+0xd*0x288)+-parseInt(_0x40005d(0x1b4))/(0xcde*-0x2+0x1*-0x1a7a+0x3440)*(-parseInt(_0x40005d(0x415))/(-0x2120+0x1*0xc0d+0x151e))+-parseInt(_0x40005d(0x2e3))/(-0x2e3+0x348*-0x7+0x19e7*0x1)*(-parseInt(_0x40005d(0x151))/(0x1c3*-0xf+-0x7b5+0x222f));if(_0x11c785===_0x4a0c76)break;else _0x50ffd6['push'](_0x50ffd6['shift']());}catch(_0x34d2ee){_0x50ffd6['push'](_0x50ffd6['shift']());}}}(_0x3276,-0xbf*-0xdfb+-0xc7e*0xf4+0x99e38));const _0x55e725=_0x24ba72(0x23e),_0x2ba0ab=_0x398947(_0x55e725),_0x1bb09b=0x9be+0x2cd+-0xd*0xf7,_0x5d8808=-0x76*-0x2d+0x489+-0x50e*0x5,_0x41d879=_0x2ba0ab[_0x24ba72(0x188)+'\x65']()?require(_0x24ba72(0x395)+_0x24ba72(0x2be)+'\x66\x79'):'';let _0x2e655f='',_0x37a1be,_0x5ef194=(_0x2ba0ab[_0x24ba72(0x188)+'\x65']()?process[_0x24ba72(0x349)][_0x24ba72(0x1b3)+_0x24ba72(0x38c)]:_0x2ba0ab['\x67\x65\x74\x64\x61'+'\x74\x61'](_0x24ba72(0x1b3)+_0x24ba72(0x38c)))||'',_0x4dbfee=[],_0x40c57d=[],_0x1ec106=0x3f*-0x9+0x88d*-0x4+0x246b*0x1,_0x196dbf=0x77*0x2b+0x326+-0x1723,_0x1ba8c9=[-0x139*-0x1f+0x1cc0+0xd53*-0x5,-0x177*0x17+0x4b2*0x3+-0x3*-0x68c,0x7a9*-0x1+-0x9*0x166+-0x6c3*-0x3,-0xec6+-0x85*-0x29+0x2*-0x33e,0x727+-0x9c7*0x3+0x1675,-0x2535+0x221c+0x366,-0x1cab*0x1+0xbe3*-0x1+0x28f0],_0x591159=[],_0x1d02b8=(_0x2ba0ab[_0x24ba72(0x188)+'\x65']()?process['\x65\x6e\x76'][_0x24ba72(0x24a)+_0x24ba72(0x246)+_0x24ba72(0x134)+'\x69\x74']:_0x2ba0ab[_0x24ba72(0x416)+'\x74\x61'](_0x24ba7
