import 'package:flutter/material.dart';
import 'package:kynkoupons/features/home/models/post.dart';

class PostProvider extends ChangeNotifier {
  List<Post> _posts = [];
  List<Post> get posts => _posts;

  PostProvider() {
    // Initialize with some dummy data
    _posts = [
      Post(
        id: '1',
        authorName: 'John Doe',
        authorAvatar: 'https://i.pravatar.cc/150?img=1',
        content: 'Just earned my first reward badge! 🎉',
        timeAgo: '2h ago',
        likes: 42,
        comments: 5,
        isLiked: false,
      ),
      Post(
        id: '2',
        authorName: 'Jane Smith',
        authorAvatar: 'https://i.pravatar.cc/150?img=2',
        content: 'Great community event yesterday!',
        imageUrl: 'https://picsum.photos/seed/event/400/300',
        timeAgo: '5h ago',
        likes: 28,
        comments: 3,
        isLiked: true,
      ),
    ];
  }

  void toggleLike(String postId) {
    final index = _posts.indexWhere((post) => post.id == postId);
    if (index != -1) {
      final post = _posts[index];
      _posts[index] = Post(
        id: post.id,
        authorName: post.authorName,
        authorAvatar: post.authorAvatar,
        content: post.content,
        imageUrl: post.imageUrl,
        timeAgo: post.timeAgo,
        likes: post.isLiked ? post.likes - 1 : post.likes + 1,
        comments: post.comments,
        isLiked: !post.isLiked,
      );
      notifyListeners();
    }
  }

  // Add methods for fetching posts, adding comments, etc.
}