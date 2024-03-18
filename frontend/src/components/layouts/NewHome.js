export default function NewHome() {
  return (
    <divv>
      <div class="container-container-fluid">
        <div class="row wrapper">
          <div class="col-10 col-lg-5">
            <form class="shadow-lg" encType="multipart/form-data">
              <h1 class="mt-2 mb-5">Update Profile</h1>

              <div class="form-group">
                <label for="email_field">Name</label>
                <input
                  type="name"
                  id="name_field"
                  class="form-control"
                  name="name"
                  value=""
                />
              </div>

              <div class="form-group">
                <label for="email_field">Email</label>
                <input
                  type="email"
                  id="email_field"
                  class="form-control"
                  name="email"
                  value=""
                />
              </div>

              <div class="form-group">
                <label for="avatar_upload">Avatar</label>
                <div class="d-flex align-items-center">
                  <div>
                    <figure class="avatar mr-3 item-rtl">
                      <img
                        src="./images/profile.jpg"
                        class="rounded-circle"
                        alt="Avatar Preview"
                      />
                    </figure>
                  </div>
                  <div class="custom-file">
                    <input
                      type="file"
                      name="avatar"
                      class="custom-file-input"
                      id="customFile"
                    />
                    <label class="custom-file-label" for="customFile">
                      Choose Avatar
                    </label>
                  </div>
                </div>
              </div>

              <button type="submit" class="btn update-btn btn-block mt-4 mb-3">
                Update
              </button>
            </form>
          </div>
        </div>
      </div>
    </divv>
  );
}
