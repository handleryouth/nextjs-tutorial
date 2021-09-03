/*
the square brackets in the name of the file tell the next.js that
the id (in this case ) will be change able.
for example : 
ninjas/id => wrong
ninjas/1 => right
ninjas/2 => right 
.
.
.
.
so the id is dynamic

*/

/*
we have to fetch all the data in this function, so we can get all the ids and return it.
based on that data, we tell next how many pages and routes to generate
*/
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  /*
        the data is going to be an array of object where each object is the user
    */

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });

  return {
    /*
        the paths needs to be an array of object
        where each object represents a route if you like
        example :
        paths : [{params: {id: } }, {}, {}]
        */
    paths: paths,
    /*
        if the user tries to access the route with an id that doesn't exits, it will get 404 pages
    */
    fallback: false,
  };
};

/*
next.js will run this function for every item (10 items) as long as it needs
context is a parameter that containing some useful keys your might needed

*/

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { ninja: data },
  };
};

export default function Details({ ninja }) {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
}
