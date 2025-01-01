import 'package:flutter/material.dart';
import 'package:kynkoupons/features/home/models/post.dart';
import 'package:kynkoupons/features/home/providers/post_provider.dart';
import 'package:kynkoupons/features/home/widgets/like_button.dart';
import 'package:provider/provider.dart';

class PostCard extends StatelessWidget {
  final Post post;

  const PostCard({Key? key, required this.post}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Card(
      margin: const EdgeInsets.symmetric(horizontal: 16, vertical: 8),
      shape: RoundedRectangleBorder(
        borderRadius: BorderRadius.circular(16),
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ListTile(
            leading: CircleAvatar(
              backgroundImage: NetworkImage(post.authorAvatar),
            ),
            title: Text(post.authorName),
            subtitle: Text(post.timeAgo),
            trailing: IconButton(
              icon: Icon(Icons.more_vert),
              onPressed: () {},
            ),
          ),
          if (post.imageUrl != null)
            Container(
              height: 200,
              width: double.infinity,
              decoration: BoxDecoration(
                image: DecorationImage(
                  image: NetworkImage(post.imageUrl!),
                  fit: BoxFit.cover,
                ),
              ),
            ),
          Padding(
            padding: const EdgeInsets.all(16),
            child: Text(post.content),
          ),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 16),
            child: Row(
              children: [
                LikeButton(
                  isLiked: post.isLiked,
                  likeCount: post.likes,
                  onTap: () {
                    context.read<PostProvider>().toggleLike(post.id);
                  },
                ),
                const SizedBox(width: 16),
                TextButton.icon(
                  icon: Icon(Icons.comment_outlined),
                  label: Text('${post.comments} Comments'),
                  onPressed: () {},
                ),
                const Spacer(),
                IconButton(
                  icon: Icon(Icons.share_outlined),
                  onPressed: () {},
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}