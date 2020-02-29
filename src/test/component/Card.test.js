import React from "react";
import { shallow, configure, mount, render } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Card from "../../components/Card";
import logo from "../../logo.svg";
import toJson from "enzyme-to-json";

configure({ adapter: new Adapter() });
describe("Card", () => {
  it("should match the snapshot with all data passed in correctly", () => {
    const component = shallow(
      <Card
        profile={{
          logo,
          name: "Brad",
          type: "Author",
          time: "2 minutes",
          message:
            "So what the German automaker is likely to focus on today is the bigger picture. This will be the first time we see the Taycan free from any prototype bodywork.",
          nReply: 21,
          upVote: 123,
          downVote: 0
        }}
      />
    );
    expect(toJson(component)).toMatchSnapshot();
  });
});
