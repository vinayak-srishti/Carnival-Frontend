import React from 'react'

function Home() {
  return (
    <div><div id="carouselExampleCaptions" class="carousel slide">
    <div class="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
      <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
    </div>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="https://img.freepik.com/free-photo/multi-colored-balloons-bring-joy-celebration-generated-by-ai_188544-19875.jpg?t=st=1709282334~exp=1709285934~hmac=b2d13b96f68549af28aa95200a68c0327e14ae6e2791d05927033207771c6918&w=1380" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>First slide label</h5>
          <p>Some representative placeholder content for the first slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://img.freepik.com/free-photo/energetic-dance-floor-with-people-celebrating-birthday_1268-30665.jpg?w=1380&t=st=1709282783~exp=1709283383~hmac=69694189489194d0c9b925af566ee9ea8f65891606efad87a3f8f1a808e9e8c2" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Second slide label</h5>
          <p>Some representative placeholder content for the second slide.</p>
        </div>
      </div>
      <div class="carousel-item">
        <img src="https://img.freepik.com/free-vector/abstract-party-audience-with-spotlights-shining-down_1048-15823.jpg?t=st=1709282675~exp=1709286275~hmac=1f14a2883c948132f1c00755fb07d092097f2832aabae45f4e3ceea36f5b22e5&w=996" class="d-block w-100" alt="..."/>
        <div class="carousel-caption d-none d-md-block">
          <h5>Third slide label</h5>
          <p>Some representative placeholder content for the third slide.</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div></div>
  )
}

export default Home