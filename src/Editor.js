import { default as React, useEffect, useRef } from 'react';
import EditorJS from '@editorjs/editorjs';
import Embed from '@editorjs/embed';
 
const DEFAULT_INITIAL_DATA = () => {
  return {
    "time": new Date().getTime(),
    "blocks": [
      {
        "type": "paragraph",
        "data": {
          "text": "This is my awesome editor!"
        }
      },
    ]
  }
}
 
const EDITTOR_HOLDER_ID = 'editorjs';
 
const Editor = (props) => {
  const ejInstance = useRef();
  const [editorData, setEditorData] = React.useState(DEFAULT_INITIAL_DATA);
 
  // This will run only once
  useEffect(() => { return () => { if(!ejInstance.current){ initEditor(); } ejInstance.current = null; } }, []);
 
  const initEditor = () => {
    const editor = new EditorJS({
      holder: EDITTOR_HOLDER_ID,
      logLevel: "ERROR",
      data: editorData,
      onReady: () => {
        ejInstance.current = editor;
      },
      onChange: async () => {
        let content = await this.editorjs.saver.save();
        // Put your logic here to save this data to your DB
        setEditorData(content);
      },
      autofocus: true,
      tools: { 
        embed: {
            class: Embed,
            inlineToolbar: true,
            config: {
                services: {
                  youtube: true,
                  facebook: true,
                  instagram: {
                    regex: /https?:\/\/www\.instagram\.com\/reel\/([^\/\?\&]+)\/?.*/,
                    embedUrl: 'https://www.instagram.com/p/<%= remote_id %>/embed',
                    html: '<iframe width="400" height="505" style="margin: 0 auto;" frameborder="0" scrolling="no" allowtransparency="true"></iframe>',
                    height: 505,
                    width: 400,
                  },
                //   https://www.tiktok.com/@chefkoudy/video/7179987907988491525?is_copy_url=1&is_from_webapp=v1
                  tiktok: {
                    regex: /https?:\/\/www.tiktok.com\/\@[0-9a-zA-Z]*\/video\/([0-9]*)[\/\?\&]*.*/,
                    embedUrl: "https://www.tiktok.com/embed/<%= remote_id %>",
                    html: '<iframe loading="lazy" width="340" height="700" allowfullscreen> </iframe>'
                  },
                }
              }
          },
      }, 
    });
    console.log(editor)
  };
 
  return (
    <React.Fragment>
      <div id={EDITTOR_HOLDER_ID}> </div>
    </React.Fragment>
  );
}
 
export default Editor;
