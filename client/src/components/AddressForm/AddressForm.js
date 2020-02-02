import React, { useRef } from 'react';
import { saveAddress } from '../../services/addressService';
import styles from './AddressForm.module.css';

const AddressForm = () => {
  const formRef = useRef();
  function handleSubmit(e) {
    e.preventDefault();
    const controls = Array.from(formRef.current.elements);
    const address = controls
      .filter(c => c.name)
      .reduce((acc, cur) => {
        acc[cur.name] = cur.value;
        return acc;
      }, {});
    saveAddress(address).then(res => console.log(res.status));
  }
  return (
    <form ref={formRef} onSubmit={handleSubmit} className={styles.form}>
      <label>
        Name
        <input name="name" />
      </label>
      <label>
        Street
        <input name="street" />
      </label>
      <label>
        Appartment/Suite/Room
        <input name="apt" />
      </label>
      <label>
        City
        <input name="city" />
      </label>
      <label>
        State
        <input name="state" />
      </label>
      <label>
        Zip
        <input name="zip" />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default AddressForm;
