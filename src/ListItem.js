import { buyItem } from './services/fetch-utils';

export default function ListItem({ fetchItems, item }) {

  async function handleClick() {
    // buy the item (in supabase)
    await buyItem(item.id);
    // refetch the updated items array by calling the function passed in through props
    await fetchItems();
  }

//  () => {} is javascript for "do nothing". It's an arrow function that doesn't nothing at all.
  return (
    // on click, if it's already been bought, do nothing; otherwise, call the handleClick function
    <div className='list-item' onClick={item.has_been_bought ? () => {} : handleClick}>
      {/* if it's been bought, this p tag should have the 'bought' class. Otherwise it should have the 'needed' class */}
      <p className={item.has_been_bought ? 'bought' : 'needed'}>
        {/* show the quantity and name here */}
        {item.quantity} {item.name}
      </p>     
    </div>
  );
}
