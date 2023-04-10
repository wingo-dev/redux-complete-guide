import { Card, Image, Text, Badge, Button, Group, Grid } from "@mantine/core";

// import { useSelector, useDispatch } from "react-redux";
// import { fetchPost } from "../action/postAction.js";
import { Fragment } from "react";
import { useState } from "react";

const Post = () => {
  // const posts = useSelector((state) => state.posts);
  // const dispatch = useDispatch();
  const [posts, setPost] = useState([]);

  const blog = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setPost(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Fragment>
      <div>
        <Button
          variant="gradient"
          gradient={{ from: "teal", to: "lime", deg: 105 }}
          onClick={blog}
        >
          Bring post
        </Button>
      </div>
      <div>
        <Grid>
          {posts.map((post) => (
            <Grid.Col md={6} lg={3}>
              <Card shadow="sm" padding="lg" radius="md" withBorder>
                <Card.Section>
                  <Image src="/img/poster.jpg" height={160} alt="Norway" />
                </Card.Section>

                <Group position="apart" mt="md" mb="xs">
                  <Text weight={500}>{post.title}</Text>
                  <Badge color="pink" variant="light">
                    On Sale
                  </Badge>
                </Group>

                <Text size="sm" color="dimmed">
                  {post.body}
                </Text>

                <Button
                  variant="light"
                  color="blue"
                  fullWidth
                  mt="md"
                  radius="md"
                >
                  Book now
                </Button>
              </Card>
            </Grid.Col>
          ))}
        </Grid>
      </div>
    </Fragment>
  );
};

export default Post;
