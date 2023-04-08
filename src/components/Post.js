import { Card, Image, Text, Badge, Button, Group, Grid } from "@mantine/core";

import { useSelector, useDispatch } from "react-redux";
import { fetchPost } from "../action/postAction.js";
import { Fragment } from "react";

const Post = () => {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const blog = () => {
    dispatch(fetchPost());
  };

  posts.map((item) => {
    console.log(item);
  });

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
          <Grid.Col md={6} lg={3}>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
              <Card.Section>
                <Image src="/img/poster.jpg" height={160} alt="Norway" />
              </Card.Section>

              <Group position="apart" mt="md" mb="xs">
                <Text weight={500}>Norway Fjord Adventures</Text>
                <Badge color="pink" variant="light">
                  On Sale
                </Badge>
              </Group>

              <Text size="sm" color="dimmed">
                With Fjord Tours you can explore more of the magical fjord
                landscapes with tours and activities on and around the fjords of
                Norway
              </Text>

              <Button
                variant="light"
                color="blue"
                fullWidth
                mt="md"
                radius="md"
              >
                Book classic tour now
              </Button>
            </Card>
          </Grid.Col>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Post;
