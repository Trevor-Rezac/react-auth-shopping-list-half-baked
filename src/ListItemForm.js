import { useState } from 'react';
import { createListItem } from './services/fetch-utils';

export default function ListItemForm({ fetchItems }) {
  // you'll need to track the name and quantity in state
  const [itemForm, setItemForm] = useState('');
  const [quantityForm, setQuantityForm] = useState(0);

  async function handleSubmit(e) {
    e.preventDefault();
    
    // make a new list item in supabase using the form values stored in state
    await createListItem({
      name: itemForm,
      quantity: quantityForm,
      has_been_bought: 'false'
    });
    // refetch the items using the handler function passed down as a prop
    fetchItems();
    // clear the name and quantity in state to refresh the form
    setItemForm('');
    setQuantityForm(0);

  }

  return (
    <div className='new-item-form-container'>
      {/* on submit, call the handleSubmit function */}
      <form onSubmit={handleSubmit}>
          I need . . . 
        <label>
            Quantity
          {/* on change, update the quantity in state */}
          <input 
            // this should be a controlled input, soi set the value based on state
            required 
            type="number" 
            name="quantity"
            value={quantityForm}
            onChange={(e) => setQuantityForm(e.target.value)}
          />
        </label>
        <label>
            Name
          {/* on change, update the name in state */}
          <input
            // this should be a controlled input, soi set the value based on state 
            required 
            name="name"
            value={itemForm}
            onChange={(e) => setItemForm(e.target.value)}
          />
        </label>
        <button>Add item</button>
      </form>
    </div>
  );
}
