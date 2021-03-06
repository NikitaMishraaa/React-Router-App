import React from 'react'

function Updating() {
    return (
        <div className="comp">
             <div class="words">
  <span>U</span>
  <span>P</span>
  <span>D</span>
  <span>A</span>
  <span>T</span>
  <span>I</span>
  <span>N</span>
  <span>G</span>
</div>
            <p><b>While a React component can have initial state, the real power is in updating its state</b> — after all, if we didn't need to update the state, the component shouldn't have any state. State is only reserved for data that changes in our component and is visible in the UI.

Instead of directly modifying the state using this.state, we use this.setState(). This is a function available to all React components that use state, and allows us to let React know that the component state has changed. This way the component knows it should re-render, because its state has changed and its UI will most likely also change. Using a setter function like this is very performant. While other frameworks like Angular.js use "dirty checking" (continuously checking for changes in an object) to see if a property has changed, React already knows because we use a built-in function to let it know what changes we'd like to make!</p>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis optio atque dolor animi asperiores eveniet similique impedit et vel. Sint, cupiditate. Dolores quidem doloribus maxime dicta, perspiciatis qui, aliquid sed asperiores similique unde nulla doloremque dolorem placeat, mollitia nisi! Amet modi velit a esse reprehenderit, minima libero possimus deserunt provident sapiente quas rem consectetur hic laboriosam repellendus sed debitis autem ipsum aspernatur aliquid corporis, quos illum! Nesciunt voluptates iusto doloribus cumque dicta, optio officia obcaecati dolorem sunt earum fugit vitae ducimus sed debitis omnis at in distinctio incidunt minus laudantium, modi, ex possimus aperiam explicabo? Animi, beatae? Odio, dolor. Hic quis tempore rerum beatae suscipit quas autem illo quia soluta veritatis. Quisquam assumenda porro tenetur laboriosam quidem, est nisi facilis, explicabo nulla nemo aliquid modi distinctio reiciendis nam blanditiis ut totam inventore in illo optio similique laborum quos? Ducimus, blanditiis magni debitis harum, totam pariatur ratione consequuntur in repellat voluptatum quia inventore cumque minima modi sint molestiae! Perspiciatis ullam, possimus similique ipsa ducimus praesentium minima quaerat quae excepturi earum iste officia ea vel, animi nostrum voluptate exercitationem nesciunt rerum delectus modi beatae perferendis molestiae adipisci. Id itaque magni velit explicabo saepe molestias suscipit nulla, esse maiores! Quam, laboriosam aperiam.</p><br/><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quis optio atque dolor animi asperiores eveniet similique impedit et vel. Sint, cupiditate. Dolores quidem doloribus maxime dicta, perspiciatis qui, aliquid sed asperiores similique unde nulla doloremque dolorem placeat, mollitia nisi! Amet modi velit a esse reprehenderit, minima libero possimus deserunt provident sapiente quas rem consectetur hic laboriosam repellendus sed debitis autem ipsum aspernatur aliquid corporis, quos illum! Nesciunt voluptates iusto doloribus cumque dicta, optio officia obcaecati dolorem sunt earum fugit vitae ducimus sed debitis omnis at in distinctio incidunt minus laudantium, modi, ex possimus aperiam explicabo? Animi, beatae? Odio, dolor. Hic quis tempore rerum beatae suscipit quas autem illo quia soluta veritatis. Quisquam assumenda porro tenetur laboriosam quidem, est nisi facilis, explicabo nulla nemo aliquid modi distinctio reiciendis nam blanditiis ut totam inventore in illo optio similique laborum quos? Ducimus, blanditiis magni debitis harum, totam pariatur ratione consequuntur in repellat voluptatum quia inventore cumque minima modi sint molestiae! Perspiciatis ullam, possimus similique ipsa ducimus praesentium minima quaerat quae excepturi earum iste officia ea vel, animi nostrum voluptate exercitationem nesciunt rerum delectus modi beatae perferendis molestiae adipisci. Id itaque magni velit explicabo saepe molestias suscipit nulla, esse maiores! Quam, laboriosam aperiam.</p>
        </div>
    )
}

export default Updating