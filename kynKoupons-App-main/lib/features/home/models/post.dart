class Post {
  final String id;
  final String authorName;
  final String authorAvatar;
  final String content;
  final String? imageUrl;
  final String timeAgo;
  final int likes;
  final int comments;
  final bool isLiked;

  Post({
    required this.id,
    required this.authorName,
    required this.authorAvatar,
    required this.content,
    this.imageUrl,
    required this.timeAgo,
    required this.likes,
    required this.comments,
    required this.isLiked,
  });
}