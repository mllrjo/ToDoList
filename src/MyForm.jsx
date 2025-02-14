export default function MyForm() {
    return (
      <>
        <label>
         <input name="myInput" defaultValue="Add task" />
        </label>
        <button>Add</button>
        <hr />
        <label>
          <input type="checkbox" name="myCheckbox" defaultChecked={true} />
          Create Mockup
          <button>Edit</button>
          <button>Delete</button>
        </label>
        <hr />
        <label>
          <input type="checkbox" name="myCheckbox" defaultChecked={true} />
          Create Static Layout 
          <button>Edit</button>
          <button>Delete</button>
        </label>
        <hr />
        <label>
         <input name="myInteractive" defaultValue="Add interactivity" />
        </label>
        <button>Save</button>
        <hr />
      </>
    );
  }
  