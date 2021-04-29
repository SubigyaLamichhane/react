import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


const App = () => {
  return(
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()}
          author="Sam"
          content = "Nice Blog Post"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = "Hari"
          content = "Very nice man"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = "{faker.name.firstName()}"
          content = "This guy is real awesome"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = {faker.name.firstName()}
          content = "Best app ever" 
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = {faker.name.firstName()}
          content = "Get some knowledge"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = {faker.name.firstName()}
          content = "Whatever man"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = {faker.name.firstName()}
          content = "Comment Section is full of indian haters WTF!!!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = {faker.name.firstName()}
          content = "There is do much poverty there."
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = {faker.name.firstName()}
          content = "This app change my perspective"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail 
          avatar = {faker.image.avatar()} 
          author = {faker.name.firstName()}
          content = "Best Best Best Speechless Speechless Speechless"
        />
      </ApprovalCard>
    </div>
  );
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);


