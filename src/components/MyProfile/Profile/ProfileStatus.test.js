import React from "react";
import { create, act} from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {

    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus status="Hello Test"/>);
        expect(component.toJSON()).toMatchSnapshot();
    });

});