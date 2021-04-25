import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus';


describe("ProfileStatus component", () => {

  test("status from props should be in the state", () => {
    let component = create(<ProfileStatus status="test status" />);
    let instance = component.getInstance();
    expect(instance.state.status).toBe("test status");
  });

  test("after creation span should be displayed", () => {
    let component = create(<ProfileStatus status="test status" />);
    let span = component.root.findByType('span');
    expect(span).not.toBeNull();
  });

  test("after creation span should contains correct status", () => {
    let component = create(<ProfileStatus status="test status" />);
    let span = component.root.findByType('span');
    expect(span.props.children).toBe('test status');
  });

  test("after creation input should not be displayed", () => {
    let component = create(<ProfileStatus status="test status" />);
    expect(() => {
    	let input = component.root.findByType('input');
    }).toThrow();
  });

  test("input should be displayed in editMode instead of span", () => {
    let component = create(<ProfileStatus status="test status" />);
    let span = component.root.findByType('span');
    span.props.onDoubleClick();
    let input = component.root.findByType('input');
    expect(input.props.value).toBe('test status');
  });

  test("callback should be called", () => {
  	let mockCallback = jest.fn();
    let component = create(<ProfileStatus status="test status" updateStatus={mockCallback} />);
    let instance = component.getInstance();
    instance.deactivateEditMode();
    expect(mockCallback.mock.calls.length).toBe(1);
  });

});