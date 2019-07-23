import React from 'react';
import Enzyme, { shallow } from 'enzyme'
import EnzymeAdapter from 'enzyme-adapter-react-16'
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() })

/**
 * Factory function to create a ShallowoWrapper for the App component
 * @param  {object}           props  component props specific to this setup
 * @param  {any}              state  Initial state for setup
 * @return {ShallowWrapper}
 */
const setup = (props={}, state=null) => {
  return shallow(<App {...props} />)
}

/**
 * Return ShallowWrapper containing node(s) with the given data-test value
 * @param   {ShallowWrapper} wrapper Enzyme shallow wrapper to search within
 * @param   {string}         val     Value of data-test attribute for search
 * @return  {ShallowWrapper}
 */
const findByTestAttr = (wrapper, value) => {
  return wrapper.find(`[data-test="${value}"]`)
}

test('renders without crashing', () => {
  const wrapper = setup()
  const appComponent = findByTestAttr(wrapper, 'component-app')
  expect(appComponent.length).toBe(1)
});

test('render increment button', () => {
  const wrapper = setup()
  const button = findByTestAttr(wrapper, 'increment-button')
  expect(button.length).toBe(1)
})

test('renders counter display', () => {
  const wrapper = setup()
  const counterDisplay = findByTestAttr(wrapper, 'counter-display')
  expect(counterDisplay.length).toBe(1)
})

test('couter starts at 0', () => {

})

test('clicking button increments counter display', () => {

})