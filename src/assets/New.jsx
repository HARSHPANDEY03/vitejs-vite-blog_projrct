import { useState } from 'react';

const New = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const handleSubmit = () => {
    let blogs = [];
    const blogsJson = localStorage.getItem('blogs');
    if (blogsJson) {
      blogs = JSON.parse(blogsJson);
    }
    blogs.push({
      title,
      content,
    });
    localStorage.setItem('blogs', JSON.stringify(blogs));
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">New Blog</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <form onSubmit={handleSubmit}>
                <div class="mb-3">
                  <label for="title" class="form-label">
                    Title {title}
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="title"
                    placeholder="Your Blog Title"
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                  />
                </div>
                <div class="mb-3">
                  <label for="content" class="form-label">
                    Content
                  </label>
                  <textarea
                    type="text"
                    class="form-control"
                    id="content"
                    placeholder="Your Blog Content"
                    rows={4}
                    value={content}
                    onChange={(e) => setContent(e.currentTarget.value)}
                  ></textarea>
                </div>
                <button className="btn btn-primary" type="submit">
                  Create
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default New;
