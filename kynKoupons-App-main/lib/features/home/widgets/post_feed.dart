import 'package:flutter/material.dart';
import 'package:kynkoupons/features/home/providers/post_provider.dart';
import 'package:kynkoupons/features/home/widgets/post_card.dart';
import 'package:provider/provider.dart';

class PostFeed extends StatelessWidget {
  const PostFeed({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final posts = context.watch<PostProvider>().posts;

    return SliverList(
      delegate: SliverChildBuilderDelegate(
        (context, index) {
          final post = posts[index];
          return PostCard(post: post);
        },
        childCount: posts.length,
      ),
    );
  }
}