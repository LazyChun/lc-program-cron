import React, { useState } from "react";
import "./App.css";
import Cron from "qnn-react-cron";
import { Button } from "antd";

const App = () => {
  let cronFns;
  const [value, setValue] = useState("* * * * * ? *");
  return (
    <>
      <div style={{ fontSize: 20, fontWeight: 600, marginLeft: 10 }}>
        表达式值：&nbsp;&nbsp;{value}
      </div>
      <Cron
        value={value}
        onOk={value => {
          console.log("cron:", value);
        }}
        getCronFns={fns => {
          // 获取值方法
          // fns.getValue: () => string

          // 解析Cron表达式到UI 调用该方法才可以重新渲染 【一般不使用】(value值改变后组件会自动更新渲染)
          // fns.onParse: () => Promise().then(()=>void).catch(()=>()=>void),
          cronFns = fns;
        }}
        footer={[
          <Button
            key="cencel"
            style={{ marginRight: 10 }}
            onClick={() => {
              setValue(null);
            }}
          >
            重置
          </Button>,
          // //默认值
          // <Button style={{ marginRight: 10 }} onClick={() => cronFns.onParse()}>
          //   解析到UI
          // </Button>,
          <Button
            key="create"
            type="primary"
            onClick={() => setValue(cronFns.getValue())}
          >
            生成
          </Button>
        ]}
      />
    </>
  );
};

export default App;
