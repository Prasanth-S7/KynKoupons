import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import '../widgets/user_header.dart';
import '../widgets/quick_actions.dart';
import '../widgets/post_feed.dart';
import '../widgets/reward_progress.dart';
import '../providers/user_provider.dart';
import '../providers/post_provider.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: SafeArea(
        child: CustomScrollView(
          slivers: [
            SliverToBoxAdapter(
              child: Padding(
                padding: const EdgeInsets.all(16.0),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    const UserHeader(),
                    const SizedBox(height: 24),
                    const QuickActions(),
                    const SizedBox(height: 24),
                    const RewardProgress(),
                    const SizedBox(height: 24),
                    Text(
                      'Recent Activity',
                      style: Theme.of(context).textTheme.bodyLarge,
                    ),
                  ],
                ),
              ),
            ),
            const PostFeed(),
          ],
        ),
      ),
    );
  }
}

