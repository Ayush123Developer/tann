function Navbar() {
  //nav
  return (
    <>
      <div className="navbar">
        <div className="title">TANN TRIM</div>

        <div className="icons">
          <span>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M17.8945 17.1953C17.9648 17.2656 18 17.3711 18 17.4766C18 17.6172 17.9648 17.7227 17.8945 17.793L17.543 18.1094C17.4375 18.2148 17.332 18.25 17.2266 18.25C17.0859 18.25 17.0156 18.2148 16.9453 18.1094L12.4102 13.5742C12.3047 13.5039 12.2695 13.4336 12.2695 13.293V12.9414C11.6016 13.5742 10.8281 14.0312 9.98438 14.3828C9.14062 14.7344 8.22656 14.875 7.3125 14.875C5.97656 14.875 4.74609 14.5586 3.62109 13.8906C2.49609 13.2578 1.61719 12.3789 0.984375 11.2539C0.316406 10.1289 0 8.89844 0 7.5625C0 6.22656 0.316406 5.03125 0.984375 3.90625C1.61719 2.78125 2.49609 1.90234 3.62109 1.23438C4.74609 0.601562 5.97656 0.25 7.3125 0.25C8.64844 0.25 9.84375 0.601562 10.9688 1.23438C12.0938 1.90234 12.9727 2.78125 13.6406 3.90625C14.2734 5.03125 14.625 6.22656 14.625 7.5625C14.625 8.51172 14.4492 9.42578 14.0977 10.2695C13.7461 11.1133 13.2891 11.8867 12.6914 12.5195H13.043C13.1484 12.5195 13.2539 12.5898 13.3594 12.6602L17.8945 17.1953ZM7.3125 13.75C8.4375 13.75 9.45703 13.5039 10.4062 12.9414C11.3555 12.3789 12.0938 11.6406 12.6562 10.6914C13.2188 9.74219 13.5 8.6875 13.5 7.5625C13.5 6.4375 13.2188 5.41797 12.6562 4.46875C12.0938 3.51953 11.3555 2.78125 10.4062 2.21875C9.45703 1.65625 8.4375 1.375 7.3125 1.375C6.1875 1.375 5.13281 1.65625 4.18359 2.21875C3.23438 2.78125 2.49609 3.51953 1.93359 4.46875C1.37109 5.41797 1.125 6.4375 1.125 7.5625C1.125 8.6875 1.37109 9.74219 1.93359 10.6914C2.49609 11.6406 3.23438 12.3789 4.18359 12.9414C5.13281 13.5039 6.1875 13.75 7.3125 13.75Z"
                fill="#E5DFD9"
              />
            </svg>
          </span>
          <span>
            <svg
              width="18"
              height="19"
              viewBox="0 0 18 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9 1.375C8.29688 1.375 7.62891 1.55078 7.03125 1.90234C6.39844 2.25391 5.94141 2.74609 5.58984 3.34375C5.23828 3.97656 5.0625 4.60938 5.0625 5.3125C5.0625 6.01562 5.23828 6.68359 5.58984 7.28125C5.94141 7.91406 6.39844 8.37109 7.03125 8.72266C7.62891 9.07422 8.29688 9.25 9 9.25C9.70312 9.25 10.3359 9.07422 10.9688 8.72266C11.5664 8.37109 12.0586 7.91406 12.4102 7.28125C12.7617 6.68359 12.9375 6.01562 12.9375 5.3125C12.9375 4.60938 12.7617 3.97656 12.4102 3.34375C12.0586 2.74609 11.5664 2.25391 10.9688 1.90234C10.3359 1.55078 9.70312 1.375 9 1.375ZM13.5 12.625C12.7617 12.625 12.1641 12.6602 11.7422 12.7305C11.4609 12.8008 11.1445 12.8711 10.8281 12.9414C10.5117 13.0469 10.2656 13.1172 10.125 13.1172C9.80859 13.1875 9.42188 13.1875 9 13.1875C8.54297 13.1875 8.15625 13.1875 7.875 13.1172C7.69922 13.1172 7.48828 13.0469 7.20703 12.9414C6.85547 12.8711 6.53906 12.8008 6.25781 12.7305C5.80078 12.6602 5.20312 12.625 4.5 12.625C3.55078 12.625 2.74219 12.9766 2.10938 13.6094C1.44141 14.2773 1.125 15.0859 1.125 16V17.125H16.875V16C16.875 15.0859 16.5234 14.2773 15.8906 13.6094C15.2227 12.9766 14.4141 12.625 13.5 12.625ZM9 0.25C9.91406 0.25 10.7578 0.496094 11.5312 0.953125C12.3047 1.41016 12.9023 2.00781 13.3594 2.78125C13.8164 3.55469 14.0625 4.39844 14.0625 5.3125C14.0625 6.22656 13.8164 7.07031 13.3594 7.84375C12.9023 8.61719 12.3047 9.25 11.5312 9.70703C10.7578 10.1641 9.91406 10.375 9 10.375C8.08594 10.375 7.24219 10.1641 6.46875 9.70703C5.69531 9.25 5.0625 8.61719 4.60547 7.84375C4.14844 7.07031 3.9375 6.22656 3.9375 5.3125C3.9375 4.39844 4.14844 3.55469 4.60547 2.78125C5.0625 2.00781 5.69531 1.41016 6.46875 0.953125C7.24219 0.496094 8.08594 0.25 9 0.25ZM13.5 11.5C14.3086 11.5 15.0469 11.7109 15.75 12.0977C16.4531 12.5195 16.9805 13.0469 17.4023 13.75C17.7891 14.4531 18 15.1914 18 16V17.125C18 17.4414 17.8594 17.7227 17.6484 17.9336C17.4375 18.1445 17.1562 18.25 16.875 18.25H1.125C0.808594 18.25 0.527344 18.1445 0.316406 17.9336C0.105469 17.7227 0 17.4414 0 17.125V16C0 15.1914 0.175781 14.4531 0.597656 13.75C0.984375 13.0469 1.51172 12.5195 2.21484 12.0977C2.91797 11.7109 3.65625 11.5 4.46484 11.5C5.27344 11.5 5.94141 11.5352 6.43359 11.6055C6.71484 11.6758 7.03125 11.7461 7.38281 11.8164C7.62891 11.9219 7.83984 11.9922 8.01562 11.9922C8.26172 12.0625 8.57812 12.0625 9 12.0625C9.38672 12.0625 9.70312 12.0625 9.98438 11.9922C10.125 11.9922 10.3359 11.9219 10.6172 11.8164C10.9688 11.7461 11.2852 11.6758 11.5664 11.6055C12.0586 11.5352 12.6914 11.5 13.5 11.5Z"
                fill="#E5DFD9"
              />
            </svg>
          </span>
          <span>
            <svg
              width="14"
              height="19"
              viewBox="0 0 14 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.0625 0.25C12.5195 0.25 12.9062 0.425781 13.2578 0.742188C13.5742 1.09375 13.75 1.48047 13.75 1.9375V18.25L7 14.3125L0.25 18.25V1.9375C0.25 1.48047 0.390625 1.09375 0.742188 0.742188C1.05859 0.425781 1.44531 0.25 1.9375 0.25H12.0625ZM12.625 16.2812V1.9375C12.625 1.79688 12.5547 1.65625 12.4492 1.55078C12.3438 1.44531 12.2031 1.375 12.0625 1.375H1.9375C1.76172 1.375 1.62109 1.44531 1.51562 1.55078C1.41016 1.65625 1.375 1.79688 1.375 1.9375V16.2812L7 13.0117L12.625 16.2812Z"
                fill="#E5DFD9"
              />
            </svg>
          </span>
          <span>
            <svg
              width="16"
              height="19"
              viewBox="0 0 16 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.5 4.75H15.875V15.4375C15.875 16.2109 15.5938 16.8789 15.0312 17.4414C14.4688 18.0039 13.8359 18.25 13.0625 18.25H2.9375C2.16406 18.25 1.49609 18.0039 0.933594 17.4414C0.371094 16.8789 0.125 16.2109 0.125 15.4375V4.75H3.5C3.5 3.94141 3.67578 3.20312 4.09766 2.5C4.48438 1.79688 5.01172 1.26953 5.71484 0.847656C6.41797 0.460938 7.15625 0.25 8 0.25C8.80859 0.25 9.54688 0.460938 10.25 0.847656C10.9531 1.26953 11.4805 1.79688 11.9023 2.5C12.2891 3.20312 12.5 3.94141 12.5 4.75ZM8 1.375C7.05078 1.375 6.24219 1.72656 5.60938 2.35938C4.94141 3.02734 4.625 3.83594 4.625 4.75H11.375C11.375 3.83594 11.0234 3.02734 10.3906 2.35938C9.72266 1.72656 8.91406 1.375 8 1.375ZM14.75 15.4375V5.875H12.5V7.5625C12.5 7.73828 12.4297 7.87891 12.3242 7.98438C12.2188 8.08984 12.0781 8.125 11.9375 8.125C11.7617 8.125 11.6211 8.08984 11.5156 7.98438C11.4102 7.87891 11.375 7.73828 11.375 7.5625V5.875H4.625V7.5625C4.625 7.73828 4.55469 7.87891 4.44922 7.98438C4.34375 8.08984 4.20312 8.125 4.0625 8.125C3.88672 8.125 3.74609 8.08984 3.64062 7.98438C3.53516 7.87891 3.5 7.73828 3.5 7.5625V5.875H1.25V15.4375C1.25 15.9297 1.39062 16.3164 1.74219 16.6328C2.05859 16.9844 2.44531 17.125 2.9375 17.125H13.0625C13.5195 17.125 13.9062 16.9844 14.2578 16.6328C14.5742 16.3164 14.75 15.9297 14.75 15.4375Z"
                fill="#E5DFD9"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="menubar">
        <h3>Bags</h3>
        <h3>Travel</h3>
        <h3>Accesories</h3>
        <h3>Gifting</h3>
        <h3>Jewelery</h3>
      </div>
    </>
  );
}

export default Navbar;
