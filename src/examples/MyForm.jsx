export default function MyForm() {
    return (
      <div>
        <label>
         <input name="myInput" defaultValue="Add task" />
        </label>
        <label>
        <button>Add</button>
        <hr />
        </label>
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
      </div>
  )
}
  