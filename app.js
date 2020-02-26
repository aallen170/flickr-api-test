const key = '44f0f3e9f1bc34456bcf2b6df8499796',
      secret = '6dd19e9e3bcfd112';

const base = 'https://www.flickr.com/services/rest/?',
      searchMethod = 'flickr.photos.search',
      sizeMethod = 'flickr.photos.getSizes',
      sort = 'relevance';

let numOfPhotos,
    photoArray,
    photoObj;

$("#searchBtn").click(e => {
  let query = $("#searchInput").val(),
      safeSearch = $("#safeSearch").val(),
      searchDepth = $("#searchDepth").val();

  GetCall(ConstructSearchUrl(query, 1, safeSearch), GetNumOfPhotos);

  console.log('search url:', ConstructSearchUrl(query, 1, safeSearch));

  console.log('numOfPhotos:', numOfPhotos);
  console.log('numOfPhotos /w searchDepth:', Math.floor(numOfPhotos * (searchDepth / 100)));

  let randomPage = Math.floor(Math.random() * numOfPhotos * (searchDepth / 100) + 1);

  GetCall(ConstructSearchUrl(query, randomPage, safeSearch), GetPhotoArray);

  let curPhotoId = GetRandomPhotoId(photoArray);
  GetCall(ConstructSizesUrl(curPhotoId), GetPhotoSize);

  let photoSrc = photoObj.source;

  let imgSnippet = `<img src="${photoSrc}">`;

  $("#res").html(imgSnippet);
});

function GetPhotoSize(response) {
  let sizeArray = response.sizes.size;

  console.log('sizeArray:', sizeArray);

  photoObj = sizeArray[sizeArray.length - 1];
}

function GetRandomPhotoId(photos) {
  let randomPhotoIndex = Math.floor(Math.random() * photos.length);

  return photos[randomPhotoIndex].id;
}

function GetPhotoArray(response) {
  photoArray = response.photos.photo;
}

function GetNumOfPhotos(response) {
  numOfPhotos = response.photos.pages;
}

function ConstructSizesUrl(photoId) {
  return `${base}method=${sizeMethod}&api_key=${key}&photo_id=${photoId}&format=json&nojsoncallback=1`;
}

function ConstructSearchUrl(query, pageNum, safe) {
  query = query.split(" ").join("+");

  console.log('safe search:', safe);

  safe = (safe) ? 1 : 3;

  return `${base}method=${searchMethod}&api_key=${key}&text=${query}&sort=${sort}&safe_search=${safe}&page=${pageNum}&format=json&nojsoncallback=1`;
}

function GetCall(call, func) {
  $.ajax({
    url: call,
    async: false,
    success: response => {
      func(response);
      return response;
    },
    error: error => {
      console.log(`error:`);
      console.log(error);
      return 0;
    }
  });
}