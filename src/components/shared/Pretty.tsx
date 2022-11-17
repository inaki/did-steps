import JSONPretty from "react-json-pretty";

const Pretty = ({ value }: { value: any }) => {
  return (
    <JSONPretty
      theme={{
        main: "line-height:2;color:silver;overflow:auto;font-size:12px;",
        error: "line-height:2;color:tomato;overflow:auto;",
        key: "color:silver;",
        string: "color:#24A384;",
        value: "color:#24A384;",
        boolean: "color:tomato;",
      }}
      id="json-pretty"
      data={value}
      keyStyle={"color:gray"}
    ></JSONPretty>
  );
};

export default Pretty;
