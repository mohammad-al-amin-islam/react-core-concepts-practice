import './App.css';

// ৪. তুমি জাভাস্ক্রিপ্ট অবজেক্ট দিয়ে স্টাইল article ট্যাগ এর মধ্যে একটা h2 এর মধ্যে কিছু স্টাইল দাও। মিনিমাম ৩টা স্টাইল দিব। 
const headerStyle = {
  margin: '50px',
  color: 'blue',
  backgroundColor: 'black',
}

function App() {
  return (
    <div className="App">
      {/* ২. JSX দিয়ে একটা div এর মধ্যে article ট্যাগ দিয়ে একটা ছোট ব্লগ টাইপের কিছু লিখতে পারো কিনা  */}
      {/* ৩. তুমি css ক্লাস লিখবে যেটার নাম হবে blog তারপর তোমার JSX এর মধ্যে গিয়ে article ট্যাগ এর মধ্যে blog ক্লাস যোগ করবে।  */}
      <article className='blog'>
        <h2 style={headerStyle}> This is a blog</h2>
        {/* ৫. article ট্যাগ এর মধ্যে একটা প্যারাগ্রাফ ট্যাগ যোগ করো। তারপর inline স্টাইল সেখানে যোগ করো।  */}
        <p style={{ fontWeight: 'bold' }}>Inline</p>
      </article>


      {/* ৭. সেই ব্লগ কম্পোনেন্ট দিয়ে মিনিমাম তিনটা কম্পোনেন্ট বানাবে।

      ৮. প্রত্যেকটা কম্পোনেন্ট এ heading এবং author নামে দুইটা প্রপার্টি সেন্ড করবে। এবং সেই প্রপার্টিগুলো দেখাবে। */}


      <Blog heading="This is heading 1" author="author1"></Blog>
      <Blog heading="This is heading 2" author="author2"></Blog>
      <Blog heading="This is heading 3" author="author3"></Blog>
    </div>
  );
}

// ৬. ব্লগ নামক একটা কম্পোনেন্ট বানাও
function Blog(props) {
  return (
    <div>
      <h1>Heading:{props.heading}</h1>
      <p>Author:{props.author}</p>
    </div>
  )
}



export default App;
