export default class contact {
  constructor() {
    this.body = document.querySelector("body");
  }

  createContact() {
    const content = document.createElement("div");
    content.id = "contact-content";
    content.innerHTML +=
      '<form action="/action_page.php"> <label for="fname">First Name</label> <input type="text" id="fname" name="firstname" placeholder="Your name.."> <label for="lname">Last Name</label> <input type="text" id="lname" name="lastname" placeholder="Your last name.."> <label for="country">Country</label> ' +
      '<select id="country" name="country">   <option value="nederland">Nederland</option>   <option value="england">England</option>   <option value="Bosnie Herzegovina">Bosnie Herzegovina</option> </select> <label for="subject">Subject</label> <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> <br><input type="submit" value="Submit" disabled></form>';
    this.body.appendChild(content);
  }
}
