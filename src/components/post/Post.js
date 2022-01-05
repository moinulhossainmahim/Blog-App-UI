import "./post.css";

export default function Post() {
  return (
    <div className='post'>
      <img
        className='post-img'
        src='https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80'
        alt=''
      />
      <div className='post-info'>
        <div className='post-cats'>
          <span className='post-cat'>Music</span>
          <span className='post-cat'>Life</span>
        </div>
        <span className='post-title'>Lorem ipsum dolor sit amet</span>
        <hr />
        <span className='post-date'>1 hour ago</span>
      </div>
      <p className='post-desc'>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum placeat
        recusandae quaerat doloribus deleniti repellat facere vitae. Rerum, ut
        hic quis quas exercitationem, similique quisquam, iste aut quaerat
        mollitia commodi? Lorem, ipsum dolor sit amet consectetur adipisicing
        elit. Illum placeat recusandae quaerat doloribus deleniti repellat
        facere vitae. Rerum, ut hic quis quas exercitationem, similique
        quisquam, iste aut quaerat mollitia commodi? Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Illum placeat recusandae quaerat doloribus
        deleniti repellat facere vitae. Rerum, ut hic quis quas exercitationem,
        similique quisquam, iste aut quaerat mollitia commodi?
      </p>
    </div>
  );
}
