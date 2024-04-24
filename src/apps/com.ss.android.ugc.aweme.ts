import { defineGkdApp } from '@gkd-kit/define';

export default defineGkdApp({
  id: 'com.ss.android.ugc.aweme',
  name: '抖音',
  groups: [
    {
      key: 11,
      name: '功能类-自动发送消息',
      desc: '直播间自动发送消息',
      quickFind: true,
      activityIds: 'com.ss.android.ugc.aweme.detail.ui.DetailActivity',
      rules: 'EditText[text^="说点什么"]',
      snapshotUrls: ['https://i.gkd.li/i/13241564'],
    },
    {
      key: 12,
      name: '功能类-休息提醒',
      quickFind: true,
      rules: [
        {
          matches: '[text="可进入使用管理助手更改设置"] -2 Button[text="取消"]',
          snapshotUrls: [
            'https://i.gkd.li/i/13241564',
            'https://i.gkd.li/i/13372604',
          ],
        },
        {
          matches: '[text="管理使用时间"] + Button[text="忽略提醒"]',
          snapshotUrls: 'https://i.gkd.li/i/13372725',
        },
      ],
    },
  ],
});
