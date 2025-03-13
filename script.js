const fetchCatagory = async () => {
  let response = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/categories"
  );
  let data = await response.json();
  displayCategory(data.categories);
};

const displayCategory = (categories) => {
  categoryContainer = document.getElementById("category-btn-container");
  for (const category of categories) {
    const div = document.createElement("div");
    div.innerHTML = `
              <button class="btn bg-[#25252526] hover:bg-red-500 hover:text-white active:bg-red-300">${category.category}</button>
        `;
    categoryContainer.append(div);
  }
};

const fetchVideo = async () => {
  const response = await fetch(
    "https://openapi.programming-hero.com/api/phero-tube/videos#"
  );
  const data = await response.json();
  loadVideo(data.videos);
};
const loadVideo = (videos) => {
  const videoContainer = document.getElementById("video-container");

  for (const video of videos) {
    const div = document.createElement("div");
    div.innerHTML = `
     <div class="card bg-base-100 shadow-sm cursor-pointer">
        <figure>
          <img class="w-full h-56 object-cover"
            src="${video.thumbnail}"
            alt="video thumbnail"
          />
        </figure>
        <div class="card-body">
          <div class="flex gap-3">
            <div>
              <div class="avatar">
                <div class="w-12 rounded-full">
                  <img src="${video.authors[0].profile_picture}" />
                </div>
              </div>
            </div>
            <div class="grid gap-1">
              <h2 class="card-title font-bold">
               ${video.title}
              </h2>
              <p class="text-sm text-gray-500 font-medium flex gap-1">${video.authors[0].profile_name}<img class="w-5" src="./assets/verified.png" alt="verified badge"></p>
              <p class="text-sm text-gray-500 font-medium">${video.others.views} views</p>
            </div>
          </div>
        </div>
      </div>
    `;
    videoContainer.append(div);
  }
};

fetchVideo();
fetchCatagory();
